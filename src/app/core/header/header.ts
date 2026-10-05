import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
  menuOpen = false;
  activeSection = '';
  isScrolled = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Detecta mudanças de rota
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveSection();
      });

    // Atualiza seção ativa no carregamento
    this.updateActiveSection();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Detecta scroll e atualiza header/seção ativa
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Altera fundo do header ao rolar
    this.isScrolled = window.scrollY > 100;

    // Detecta seção ativa apenas na página Home
    if (this.router.url === '/' || this.router.url === '') {
      this.detectActiveSection();
    }
  }

  // Detecta qual seção está visível
  private detectActiveSection() {
    const sections = ['home', 'sobre', 'projetos', 'contatos'];
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  // Atualiza seção ativa baseada na URL
  private updateActiveSection() {
    const path = this.router.url.substring(1); // Remove '/'
    this.activeSection = path || 'home';
  }

  // Verifica se o link está ativo
  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  // Scroll suave para seção (apenas na Home)
  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    if (this.router.url === '/' || this.router.url === '') {
      // Já está na home, apenas faz scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
        this.closeMenu();
        this.activeSection = sectionId;
      }
    } else {
      // Navega para home e depois faz scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth',
            });
            this.activeSection = sectionId;
          }
        }, 100);
      });
      this.closeMenu();
    }
  }
}
