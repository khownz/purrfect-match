import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { KITTENS } from '../../data/kittens';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DrawerComponent],
  styleUrl: './home.component.scss',
  template: `
    <!-- TODO: replace with fixed buttons and/or gestures-->
    <button class="temporary-please-remove" (click)="swipeLeft()">left</button>
    <button class="temporary-please-remove" (click)="swipeRight()">right</button>
    <br />
    <br />

    <main class="grid">
      <div
        class="primary-image"
        [ngStyle]="{ 'background-image': 'url(' + cats[activeCatIndex].imagePathNames[0] + ')' }"
      ></div>

      <app-drawer [activeCat]="cats[activeCatIndex]"></app-drawer>
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
