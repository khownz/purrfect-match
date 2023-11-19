import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paw',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './paw.component.scss',
  template: `
    <div class="paw" [ngClass]="rotate">
      <img class="paw-image" [src]="imageUrl" />
    </div>
  `,
})
export class PawComponent implements OnChanges {
  @Input() color!: 'green' | 'red';
  @Input() rotate: 'left' | 'none' | 'right' = 'none';
  @Input() darkModeEnabled!: boolean;

  imageUrl: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes && changes['color']) || changes['darkModeEnabled']) {
      this.imageUrl = `assets/${this.color}_paw${this.darkModeEnabled ? '_dark' : ''}.svg`;
    }
  }
}
