import { Injectable } from '@angular/core';
import { Theme } from './theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'activeTheme';
  private readonly THEME_DEFAULT = Theme.LIGHT;
  private readonly SUPPORTED_THEMES: Theme[] = Object.values(Theme);

  configureActiveTheme(): string {
    const activeTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (activeTheme !== null && this.SUPPORTED_THEMES.includes(activeTheme)) {
      this.#applyTheme(activeTheme);
      return activeTheme;
    } else {
      return this.setActiveTheme(this.THEME_DEFAULT);
    }
  }

  getActiveTheme() {
    const activeTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (activeTheme !== null && this.SUPPORTED_THEMES.includes(activeTheme)) {
      return activeTheme as Theme;
    } else {
      return this.setActiveTheme(this.THEME_DEFAULT);
    }
  }

  setActiveTheme(theme: Theme) {
    if (!this.SUPPORTED_THEMES.includes(theme)) {
      theme = this.THEME_DEFAULT;
    }
    this.#applyTheme(theme);
    return this.#saveActiveTheme(theme);
  }

  #applyTheme(theme: Theme): void {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK.valueOf());
    } else {
      document.documentElement.classList.remove(Theme.DARK.valueOf());
    }
  }

  #saveActiveTheme(theme: Theme) {
    localStorage.setItem(this.THEME_KEY, theme);
    return theme;
  }
}
