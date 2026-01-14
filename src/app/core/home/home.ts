import { Component, HostListener } from '@angular/core';
import { CursosCertificacoes } from '../cursos-certificacoes/cursos-certificacoes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CursosCertificacoes],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
// Opacidade inicial (100%)
  contentOpacity = 1;

 // Escuta o evento de rolagem da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Posição atual do scroll vertical
    const scrollTop = window.scrollY || 0;

    // Define até onde o efeito acontece (em px)
    const fadeLimit = 20;

    // Calcula a opacidade (1 → 0)
    this.contentOpacity = Math.max(
      0,
      1 - scrollTop / fadeLimit
    );
  }

}
