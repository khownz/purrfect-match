import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { KITTENS } from '../../data/kittens';
import { PawComponent } from '../../components/paw/paw.component';
import { startVibration } from '../../core/utils/vibration.utils';
import { PATHS } from '../../app.routes';
import { Router } from '@angular/router';
import { fireHeartsConfetti } from '../../core/utils/confetti.utils';
import { ScratchComponent } from '../../components/scratch/scratch.component';
import { DarkModeBtnComponent } from '../../components/dark-mode-btn/dark-mode-btn.component';
import { Theme } from '../../core/services/theme/theme.enum';
import { ThemeService } from '../../core/services/theme/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DrawerComponent, PawComponent, ScratchComponent, DarkModeBtnComponent],
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
        <img class="logo" src="assets/logo.svg" alt="logo" (click)="goToWebsite()" />
        <app-dark-mode-btn
          class="dark-mode-btn"
          [darkModeEnabled]="currentTheme === Theme.DARK"
          (toggle)="toggleDarkMode()"
        ></app-dark-mode-btn>
        <div class="gradient-overlay-top"></div>
        <div
          class="primary-image"
          [ngStyle]="{ 'background-image': 'url(' + cats[activeCatIndex].imagePathNames[0] + ')' }"
        ></div>

        <app-drawer [activeCat]="cats[activeCatIndex]"></app-drawer>

        <div class="gradient-overlay-bottom"></div>
        <div class="paw-buttons">
          <app-paw color="red" rotate="left" [darkModeEnabled]="currentTheme === Theme.DARK" (click)="swipeLeft()" />
          <app-paw
            color="green"
            rotate="right"
            [darkModeEnabled]="currentTheme === Theme.DARK"
            (click)="swipeRight()"
          />
        </div>
        <app-scratch class="scratch"></app-scratch>
      </section>
    </main>
  `,
})
export class HomeComponent implements OnInit {
  @ViewChild('appRoot', { static: false }) appRoot!: ElementRef;
  @ViewChild('swipeContainer', { static: false }) swipeContainer!: ElementRef;
  @ViewChild(ScratchComponent) scratch!: ScratchComponent;
  cats = KITTENS;
  activeCatIndex = 0;
  currentTheme?: Theme;
  protected readonly Theme = Theme;
  private readonly router: Router = inject(Router);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.currentTheme = this.themeService.getActiveTheme();
  }

  pan(event: any): void {
    if (event.deltaX === 0) {
      this.#resetSwipeContainerTransform();
      return;
    }

    if (event.center.x === 0 && event.center.y === 0) {
      this.#resetSwipeContainerTransform();
      return;
    }

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
    this.#resetSwipeContainerTransform();
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

  goToWebsite(): void {
    window.open('https://www.purrito.be/', '_blank');
  }

  toggleDarkMode() {
    if (this.currentTheme === Theme.LIGHT) {
      this.currentTheme = Theme.DARK;
      this.themeService.setActiveTheme(Theme.DARK);
    } else {
      this.currentTheme = Theme.LIGHT;
      this.themeService.setActiveTheme(Theme.LIGHT);
    }
  }

  #resetSwipeContainerTransform(): void {
    this.swipeContainer.nativeElement.style.transform = '';
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
    this.router.navigate([PATHS.ADOPT_CONFIRM, this.cats[this.activeCatIndex].id]);
  }

  #vibrate(): void {
    startVibration(500);
  }
}
