import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-scratch',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './scratch.component.scss',
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          height: '60vh',
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          height: '30vh',
          opacity: 0,
        })
      ),
      transition('show => hide', [animate('0.2s')]),
      transition('hide => show', [animate('0.1s')]),
    ]),
    trigger('fadeIn', [
      state(
        'dark',
        style({
          opacity: 1,
        })
      ),
      state(
        'light',
        style({
          opacity: 0,
        })
      ),
      transition('dark => light', [animate('0.3s')]),
      transition('light => dark', [animate('0.1s')]),
    ]),
  ],
  template: `
    <div class="scratch-container">
      <div [@fadeIn]="showScratch ? 'dark' : 'light'" class="scratch-bg"></div>
      <img [@showHide]="showScratch ? 'show' : 'hide'" class="scratch" src="assets/scratch.svg" />
    </div>
  `,
})
export class ScratchComponent {
  showScratch = false;

  scratch() {
    this.showScratch = true;
    timer(100).subscribe(() => (this.showScratch = false));
  }
}
