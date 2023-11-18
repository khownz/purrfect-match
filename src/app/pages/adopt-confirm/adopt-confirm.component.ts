import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PATHS } from '../../app.routes';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-adopt-confirm',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  styleUrl: './adopt-confirm.component.scss',
  template: `
    <section>
      <app-badge [text]="'Kijk nog even verder'" (click)="goHome()"></app-badge>
      <p>Wat leuk dat jij {{ catName }} wil adopteren</p>
      <app-badge [text]="'Ik ga er voor!'" (click)="openAdoptionForm()"></app-badge>
    </section>
  `,
})
export class AdoptConfirmComponent {
  @Input() catName = '';

  private readonly router: Router = inject(Router);

  goHome(): void {
    this.router.navigate([PATHS.ROOT]);
  }

  openAdoptionForm(): void {
    window.open('https://www.purrito.be/adoptieformulier/', '_blank');
  }
}
