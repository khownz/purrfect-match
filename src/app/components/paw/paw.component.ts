import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paw',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './paw.component.scss',
  template: `
    <div class="paw" [ngClass]="rotate">
      <img class="paw-image" [src]="'assets/' + color + '_paw.svg'" />
    </div>
  `,
})
export class PawComponent {
  @Input() color!: 'green' | 'red';
  @Input() rotate: 'left' | 'none' | 'right' = 'none';
}