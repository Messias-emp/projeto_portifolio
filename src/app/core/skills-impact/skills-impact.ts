import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills-impact',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './skills-impact.html',
  styleUrl: './skills-impact.scss',
})
export class SkillsImpact implements AfterViewInit {
 /**
   * HARD SKILLS
   * Competências técnicas diretamente ligadas à entrega de produto
   */
  hardSkills = [
    'Angular',
    'React',
    'React Native',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3 / SCSS',
    'Node.js',
    'Java',
    'APIs REST',
    'Git & GitHub',
    'UX/UI Fundamentals'
  ];

  /**
   * SOFT SKILLS
   * Competências comportamentais valorizadas por empresas
   */
  softSkills = [
    'Comunicação clara',
    'Aprendizado contínuo',
    'Autonomia',
    'Colaboração em equipe',
    'Pensamento analítico',
    'Foco em resultado'
  ];

constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.host.nativeElement.classList.add('visible');
          observer.disconnect(); // performance first
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.host.nativeElement);
  }
}


