import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './badge.component.scss',
  template: `<div class="badge">{{ text }}</div>`,
})
export class BadgeComponent {
  @Input() text = '';
}
