import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { KITTENS } from '../../data/kittens';
import { PawComponent } from '../../components/paw/paw.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DrawerComponent, PawComponent],
  styleUrl: './home.component.scss',
  template: `
    <main
      class="grid"
      (swipeleft)="swipeLeft()"
      (swiperight)="swipeRight()"
      (pan)="pan($event)"
      (panend)="panend($event)"
    >
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
  cats = KITTENS;
  activeCatIndex = 0;

  pan(event: any): void {
    console.log('pan');

    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    // tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    // tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    const rotate = event.deltaX * 0.03;

    // TODO: replace with elementRef
    const main = document.querySelector('main.grid') as HTMLElement;
    main.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  }

  panend(event: any): void {
    const main = document.querySelector('main.grid') as HTMLElement;
    main.style.transform = '';
  }

  swipeLeft(): void {
    this.#showNextCat();
    this.scrollToTop();
  }

  swipeRight(): void {
    this.#openAdoptionForm();
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

  scrollToTop() {
    window.scroll(0, 0);
  }
}
