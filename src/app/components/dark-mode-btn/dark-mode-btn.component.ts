import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-btn',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './dark-mode-btn.component.scss',
  template: `
    @if (darkModeEnabled) {
    <img class="dark-mode-btn" src="assets/cat_eye_big.svg" (click)="toggle.emit()" />
    } @else {
    <img class="dark-mode-btn" src="assets/cat_eye_narrow.svg" (click)="toggle.emit()" />
    }
  `,
})
export class DarkModeBtnComponent {
  @Input() darkModeEnabled!: boolean;
  @Output() toggle = new EventEmitter<void>();
}
