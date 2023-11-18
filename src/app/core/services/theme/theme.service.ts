import { Injectable } from '@angular/core';
import { Theme } from './theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'activeTheme';
  private readonly THEME_DEFAULT = Theme.LIGHT.valueOf();
  private readonly SUPPORTED_THEMES: string[] = Object.values(Theme);

  configureActiveTheme(): string {
    const activeTheme = localStorage.getItem(this.THEME_KEY);
    if (activeTheme !== null && this.SUPPORTED_THEMES.includes(activeTheme)) {
      this.#applyTheme(activeTheme);
      return activeTheme;
    } else {
      return this.setActiveTheme(this.THEME_DEFAULT);
    }
  }

  setActiveTheme(theme: string) {
    if (!this.SUPPORTED_THEMES.includes(theme)) {
      theme = this.THEME_DEFAULT;
    }
    this.#applyTheme(theme);
    return this.#saveActiveTheme(theme);
  }

  #applyTheme(theme: String): void {
    if (theme === Theme.DARK.valueOf()) {
      document.documentElement.classList.toggle(Theme.DARK.valueOf());
    }
  }

  #saveActiveTheme(theme: string) {
    localStorage.setItem(this.THEME_KEY, theme);
    return theme;
  }
}
