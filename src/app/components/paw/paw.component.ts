import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-paw',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './paw.component.scss',
  animations: [
    trigger('pulse', [
      state(
        'shrink',
        style({
          height: '40px',
        })
      ),
      state(
        'grow',
        style({
          height: '80px',
        })
      ),
      transition('shrink => grow', [animate('0.2s')]),
      transition('grow => shrink', [animate('0.1s')]),
    ]),
  ],
  template: `
    <div class="paw" [ngClass]="rotate" (click)="onClick()">
      <img [@pulse]="animatePaw ? 'shrink' : 'grow'" class="paw-image" [src]="imageUrl" />
    </div>
  `,
})
export class PawComponent implements OnChanges {
  @Input() color!: 'green' | 'red';
  @Input() rotate: 'left' | 'none' | 'right' = 'none';
  @Input() darkModeEnabled!: boolean;

  imageUrl: string = '';
  animatePaw = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes && changes['color']) || changes['darkModeEnabled']) {
      this.imageUrl = `assets/${this.color}_paw${this.darkModeEnabled ? '_dark' : ''}.svg`;
    }
  }

  onClick() {
    this.animatePaw = true;
    timer(80).subscribe(() => (this.animatePaw = false));
  }
}
