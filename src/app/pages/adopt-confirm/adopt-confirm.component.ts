import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PATHS } from '../../app.routes';
import { BadgeComponent } from '../../components/badge/badge.component';
import { Cat } from '../../types/cat';
import { KITTENS } from '../../data/kittens';

@Component({
  selector: 'app-adopt-confirm',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  styleUrl: './adopt-confirm.component.scss',
  template: `
    <section>
      <app-badge [text]="'Kijk nog even verder'" (click)="goHome()"></app-badge>
      @if (cat) {
      <p>Wat leuk dat jij {{ cat.name }} wil adopteren</p>
      }
      <app-badge [text]="'Ik ga er voor!'" (click)="openAdoptionForm()"></app-badge>
    </section>
  `,
})
export class AdoptConfirmComponent implements OnInit {
  @Input() catId!: Cat['id'];
  cat: Cat | undefined;

  private readonly router: Router = inject(Router);

  ngOnInit() {
    this.cat = KITTENS.find((cat) => this.catId === cat.id);
  }

  goHome(): void {
    this.router.navigate([PATHS.ROOT]);
  }

  openAdoptionForm(): void {
    window.open('https://www.purrito.be/adoptieformulier/', '_blank');
  }
}
