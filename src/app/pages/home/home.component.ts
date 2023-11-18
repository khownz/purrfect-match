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
    <main class="grid" (swipeleft)="swipeLeft()" (swiperight)="swipeRight()">
      <div
        class="primary-image"
        [ngStyle]="{ 'background-image': 'url(' + cats[activeCatIndex].imagePathNames[0] + ')' }"
      ></div>

      <app-drawer [activeCat]="cats[activeCatIndex]"></app-drawer>

      <div class="paw-buttons">
        <app-paw color="red" (click)="swipeLeft()" />
        <app-paw color="green" (click)="swipeRight()" />
      </div>
    </main>
  `,
})
export class HomeComponent {
  cats = KITTENS;
  activeCatIndex = 0;

  swipeLeft(): void {
    this.#showNextCat();
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
}
