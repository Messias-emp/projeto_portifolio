import { Component, HostListener, } from '@angular/core';
import { SkillsImpact } from "../skills-impact/skills-impact";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [SkillsImpact],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  // Opacidade inicial (100%)
  contentOpacity = 1;

  // Escuta o evento de rolagem da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Posição atual do scroll vertical
    const scrollTop = window.scrollY || 0;

    // Define até onde o efeito acontece (em px)
    const fadeLimit = 500;

    // Calcula a opacidade (1 → 0)
    this.contentOpacity = Math.max(
      0,
      1 - scrollTop / fadeLimit
    );
  }

}
