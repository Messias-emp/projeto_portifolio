import { Component } from '@angular/core';
import { ThemeService, AppTheme } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-switcher" role="group" aria-label="Escolha de tema">
      <button
        *ngFor="let t of themes"
        (click)="setTheme(t)"
        [attr.aria-pressed]="themeService.theme === t"
        [class.active]="themeService.theme === t"
      >
        {{ toLabel(t) }}
      </button>
    </div>
  `,
  styleUrls: ['./theme-switcher.scss']
})
export class ThemeSwitcher{
  themes: AppTheme[] = ['theme-light', 'theme-dark', 'theme-matrix'];

  constructor(public themeService: ThemeService) {}

  setTheme(theme: AppTheme) {
    // delega a ação ao serviço central
    this.themeService.applyTheme(theme);
  }

  toLabel(theme: AppTheme) {
    // converte 'theme-matrix' => 'Matrix'
    return theme.replace('theme-', '').replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }
}
