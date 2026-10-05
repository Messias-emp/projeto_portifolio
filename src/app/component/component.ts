import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatrixCanvas } from '../matrix-canvas/matrix-canvas';
import { ThemeSwitcher} from '../shared/ui/theme-switcher/theme-switcher';
import { Header } from "../core/header/header";
import { Footer } from "../core/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatrixCanvas,
    ThemeSwitcher,
    Header,
    Footer
  ],
  template: `
 <app-matrix-canvas></app-matrix-canvas>

<app-theme-switcher></app-theme-switcher>
    <app-header></app-header>

    <main class="main-wrapper">

      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./component.scss']
})
export class AppComponent {}





