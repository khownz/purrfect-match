import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DrawerComponent],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  constructor(themeService: ThemeService) {
    themeService.configureActiveTheme();
  }
}
