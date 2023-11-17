import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KITTENS } from './data/kittens';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
