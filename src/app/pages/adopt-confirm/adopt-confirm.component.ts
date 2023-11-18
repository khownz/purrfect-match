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
    <section class="adopt-confirm-page">
      <div class="back-arrow" (click)="goHome()"></div>
      <img class="cat-profile-img" src="{{ cat?.imagePathNames?.[0] }}" alt="{{ cat?.name }} picture" />
      <h1 class="name">{{ cat?.name }}</h1>
      <p class="central-text">
        Wat ontzettend leuk en bijzonder dat je mij wil adopteren! Het idee alleen al brengt een glimlach op mijn
        gezicht en verwarmt mijn hart. Ik kijk reikhalzend uit naar de mooie avonturen die we samen gaan beleven!
      </p>
      <button class="confirm-button" (click)="openAdoptionForm()">I choose you!</button>
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
