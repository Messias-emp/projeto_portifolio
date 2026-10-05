import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Tipagem explícita dos temas usados no app.
 * Facilita refactor e autocomplete.
 */
export type AppTheme = 'theme-light' | 'theme-dark' | 'theme-matrix';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme: AppTheme = 'theme-light';
  private readonly storageKey = 'app.theme';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Apenas no browser acessamos localStorage/document
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.storageKey) as AppTheme | null;
      if (saved) {
        // aplica sem regravar (já persistido)
        this.applyTheme(saved, { save: false });
      } else {
        // garante que o html tenha uma classe padrão
        this.applyTheme(this.currentTheme, { save: true });
      }
    }
  }

  get theme() {
    return this.currentTheme;
  }

  /**
   * Aplica o tema removendo classes conhecidas e adicionando a nova.
   * Opcional: persiste no localStorage (por padrão true).
   */
  applyTheme(theme: AppTheme, opts: { save?: boolean } = { save: true }) {
    if (!isPlatformBrowser(this.platformId)) return;

    const html = document.documentElement;
    html.classList.remove('theme-light', 'theme-dark', 'theme-matrix');
    html.classList.add(theme);

    this.currentTheme = theme;

    if (opts.save ?? true) {
      localStorage.setItem(this.storageKey, theme);
    }
  }
}
