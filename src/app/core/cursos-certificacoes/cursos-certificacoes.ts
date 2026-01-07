import { CommonModule} from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';



export interface Certificacao {
  titulo: string;
  instituicao: string;
  descricao: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-cursos-certificacoes',
  standalone: true,
  imports: [CommonModule], // CommonModule already provides NgFor
  templateUrl: './cursos-certificacoes.html',
  styleUrls: ['./cursos-certificacoes.scss'],
})

export class CursosCertificacoes implements AfterViewInit {
/** PDF sanitizado para uso no iframe */
safePdfUrl: SafeResourceUrl | null = null;

constructor(
  private sanitizer: DomSanitizer,
  private host: ElementRef<HTMLElement>,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

  /** Controla se o modal está aberto */
  isModalOpen: boolean = false;

  /** Curso atualmente selecionado no modal */
  selectedCurso: Certificacao | null = null;
  /** Abre o modal com o curso selecionado */

openModal(curso: Certificacao): void {
  this.selectedCurso = curso;

  // 🔐 Sanitiza a URL do PDF
  this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    curso.pdfUrl
  );

  this.isModalOpen = true;

  document.body.style.overflow = 'hidden';
}


/** Fecha o modal */
closeModal(): void {
  this.isModalOpen = false;
  this.selectedCurso = null;
  this.safePdfUrl = null;
  // Restaura scroll
  document.body.style.overflow = '';
}



  /**
   * Lifecycle Hook executado após o componente ser renderizado no DOM.
   * É o local ideal para usar IntersectionObserver,
   * pois o elemento já existe visualmente.
   */
  ngAfterViewInit(): void {
     // 🚨 Proteção contra SSR
  if (!isPlatformBrowser(this.platformId)) {
    return;
  }
    /**
     * IntersectionObserver observa quando o componente
     * entra ou sai da viewport (área visível da tela).
     * Isso evita o uso de listeners pesados de scroll.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {

        /**
         * entry.isIntersecting === true
         * significa que o componente entrou na área visível.
         */
        if (entry.isIntersecting) {

          // Adiciona a classe 'visible' ao host do componente
          this.host.nativeElement.classList.add('visible');

          // Para de observar após a primeira animação
          // (melhora performance e evita reanimações)
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
        // A animação é disparada quando 20% do componente
        // estiver visível na tela
      }
    );

    // Inicia a observação do próprio componente
    observer.observe(this.host.nativeElement);
  }


  certificacoes: Certificacao[] = [
    {
      titulo: 'Formação Front-End: HTML, CSS e JS:',
      instituicao: '(Plataforma DIO)',
      descricao: 'Nas habilidades: Git, GitHub, HTML, CSS, JavaScript',
      pdfUrl: 'assets/certificados/certf-front-end.pdf'
    },
    {
      titulo: 'Formação: Mobile Developer.',
      instituicao: '(Plataforma DIO)',
      descricao: 'Nas habilidades: Node.js, GitHub, Git, JavaScript, Node Package Manager (NPM), React Native, Engenharia de Prompt, GitHub Copilot.',
      pdfUrl: 'assets/certificados/moble.pdf'
    },
      {
      titulo: 'Formação: Back-End: com Java e Spring Boot.',
      instituicao: '(Plataforma DIO)',
      descricao: 'Nas habilidades: Java, Spring, MongoDB, SQL, NoSQL, Maven.',
      pdfUrl: 'assets/certificados/certificado-back-end.pdf'
    },
    {
      titulo: 'Formação: Lógica de Programação e Git/GitHub.',
      instituicao: '(Plataforma DIO)',
      descricao: 'Nas habilidades: Lógica de Programação com JavaScript.',
      pdfUrl: 'assets/certificados/cert-logica-programacao.pdf'
    },
  ];



}

