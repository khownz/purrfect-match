import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cat } from '../../types/cat';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  styleUrl: './drawer.component.scss',
  template: `
    <div class="cat-drawer">
      <div class="cat-ears">
        <div class="cat-ears-bg"></div>
        <div class="cat-ears-image"></div>
      </div>
      <section class="cat-details">
        <div class="cat-header">
          <h1 class="cat-name">{{ activeCat.name }}</h1>
          <span class="cat-age">{{ activeCat.age }}</span>
        </div>

        <div class="cat-likes">
          @for (like of activeCat.likes;track $index) {
          <app-badge [text]="like"></app-badge>
          }
        </div>

        <div class="cat-bio-container">
          <h2 class="title">Over {{ activeCat.name }}</h2>
          <p [innerHTML]="activeCat.bio"></p>
        </div>
      </section>

      <section class="secondary-images-container">
        @for (catImg of activeCat.imagePathNames;track $index) {
        <img class="secondary-image" src="{{ catImg }}" alt="{{ activeCat.name }} picture - {{ $index }}" />
        }
      </section>
    </div>
  `,
})
export class DrawerComponent {
  @Input() activeCat!: Cat;
}
