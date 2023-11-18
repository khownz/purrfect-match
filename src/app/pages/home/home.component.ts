import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { KITTENS } from '../../data/kittens';
import { PawComponent } from '../../components/paw/paw.component';
import { startVibration } from '../../core/utils/vibration.utils';
import { PATHS } from '../../app.routes';
import { Router } from '@angular/router';
import { fireHeartsConfetti } from '../../core/utils/confetti.utils';
import { ScratchComponent } from '../../components/scratch/scratch.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DrawerComponent, PawComponent, ScratchComponent],
  styleUrl: './home.component.scss',
  template: `
    <main #appRoot>
      <section
        class="grid"
        #swipeContainer
        (swipeleft)="swipeLeft()"
        (swiperight)="swipeRight()"
        (pan)="pan($event)"
        (panend)="resetView()"
      >
        <img class="logo" src="assets/logo.svg" alt="logo" />
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
        <app-scratch class="scratch"></app-scratch>
      </section>
    </main>
  `,
})
export class HomeComponent {
  @ViewChild('appRoot', { static: false }) appRoot!: ElementRef;
  @ViewChild('swipeContainer', { static: false }) swipeContainer!: ElementRef;
  @ViewChild(ScratchComponent) scratch!: ScratchComponent;

  cats = KITTENS;
  activeCatIndex = 0;

  private readonly router: Router = inject(Router);

  pan(event: any): void {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    this.appRoot.nativeElement.classList.toggle('cat-love', event.deltaX > 0);
    this.appRoot.nativeElement.classList.toggle('cat-claw', event.deltaX < 0);
    this.appRoot.nativeElement.style.backgroundSize = `${Math.abs(event.deltaX) * 0.15}%`;

    const rotate = event.deltaX * 0.02;
    this.swipeContainer.nativeElement.style.transform =
      'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  }

  resetView(): void {
    this.appRoot.nativeElement.classList.remove('cat-love', 'cat-claw');
    this.appRoot.nativeElement.style.backgroundSize = 'initial';
    this.swipeContainer.nativeElement.style.transform = '';
  }

  swipeLeft(): void {
    this.#vibrate();
    this.#showNextCat();
    this.#scrollToTop();

    this.scratch.scratch();
  }

  swipeRight(): void {
    this.#vibrate();
    fireHeartsConfetti();

    this.#goToAdoptionConfirmationPage();
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

  #goToAdoptionConfirmationPage(): void {
    this.router.navigate([PATHS.ADOPT_CONFIRM]);
  }

  #vibrate(): void {
    startVibration(500);
  }
}
