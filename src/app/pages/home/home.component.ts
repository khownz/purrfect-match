import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { KITTENS } from '../../data/kittens';
import { PawComponent } from '../../components/paw/paw.component';
import { startVibration } from '../../core/utils/vibration.utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DrawerComponent, PawComponent],
  styleUrl: './home.component.scss',
  template: `
    <main
      #container
      class="grid"
      (swipeleft)="swipeLeft()"
      (swiperight)="swipeRight()"
      (pan)="pan($event)"
      (panend)="resetView()"
    >
      <img class="logo" src="assets/logo.svg" />
      <div class="gradient-overlay-top"></div>
      <div
        class="primary-image"
        [ngStyle]="{ 'background-image': 'url(' + cats[activeCatIndex].imagePathNames[0] + ')' }"
      ></div>

      <app-drawer [activeCat]="cats[activeCatIndex]"></app-drawer>

      <div class="gradient-overlay-bottom"></div>
      <div class="paw-buttons">
        <app-paw color="red" rotate="left" (click)="swipeLeft()" />
        <app-paw color="green" rotate="right" (click)="swipeRight()" />
      </div>
    </main>
  `,
})
export class HomeComponent {
  @ViewChild('container', { static: false }) container!: ElementRef;

  cats = KITTENS;
  activeCatIndex = 0;

  pan(event: any): void {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    // TODO: should probably not be applied to body, but to a wrapper div instead
    document.body.classList.toggle('cat-love', event.deltaX > 0);
    document.body.classList.toggle('cat-claw', event.deltaX < 0);
    document.body.style.backgroundSize = `${Math.abs(event.deltaX) * 0.15}%`;

    const rotate = event.deltaX * 0.02;
    this.container.nativeElement.style.transform =
      'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  }

  resetView(): void {
    document.body.classList.remove('cat-love', 'cat-claw');
    document.body.style.backgroundSize = 'initial';
    this.container.nativeElement.style.transform = '';
  }

  swipeLeft(): void {
    this.#vibrate();
    this.#showNextCat();
    this.#scrollToTop();
  }

  swipeRight(): void {
    this.#vibrate();
    this.#openAdoptionForm();
  }

  #scrollToTop() {
    window.scroll(0, 0);
  }

  #showNextCat() {
    if (this.activeCatIndex === this.cats.length - 1) {
      this.activeCatIndex = 0;
    } else {
      ++this.activeCatIndex;
    }
  }

  #openAdoptionForm(): void {
    window.open('https://www.purrito.be/adoptieformulier/', '_blank');
  }

  #vibrate(): void {
    startVibration(500);
  }
}
