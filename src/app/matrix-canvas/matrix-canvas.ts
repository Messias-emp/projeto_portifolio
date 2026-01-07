import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-matrix-canvas',
  standalone: true,
  template: `
    <canvas #matrixCanvas class="matrix-canvas"></canvas>
  `,

})

export class MatrixCanvas implements AfterViewInit, OnDestroy {

  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;

  // Parâmetros de governança visual
  private fontSize: number = 14;

  // Controla a queda das colunas
  private drops: number[] = [];

  // Conjunto de caracteres da chuva
  private characters: string[] = ['0', '1'];

  // Cache de glifos pré-renderizados (com glow aplicado uma vez)
  private glyphCache: HTMLCanvasElement[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}


  // ============================================================
  // 1. Inicialização pós-renderização do componente
  // ============================================================
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // ← NÃO roda no SSR
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    this.ctx = ctx;

    // Ajusta dimensões do canvas para o tamanho total da viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configura estrutura da chuva + glifos neon
    this.initializeMatrix(canvas);

    // Inicia animação contínua
    this.drawMatrix(canvas);
  }

  // ============================================================
  // 2. Setup inicial: colunas + glifos com glow pré-renderizado
  // ============================================================
  initializeMatrix(canvas: HTMLCanvasElement) {

    // Define quantidade de colunas proporcional ao tamanho da fonte
    const columns = Math.floor(canvas.width / this.fontSize);

    // Cada coluna começa em um ponto vertical aleatório
    this.drops = Array.from({ length: columns }).map(() =>
      Math.floor(Math.random() * (canvas.height / this.fontSize))
    );

    // *** Pré-renderização dos glifos ***
    // Esta etapa executa uma única vez, garantindo performance exemplar.
    this.glyphCache = this.characters.map(char => {
      // Canvas auxiliar para gerar o glifo com glow
      const offCanvas = document.createElement('canvas');
      const size = this.fontSize * 2;

      offCanvas.width = size;
      offCanvas.height = size;

      const offCtx = offCanvas.getContext('2d')!;

      // Configuração tipográfica básica
      offCtx.font = `${this.fontSize}px monospace`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      // Glow permanente — calculado 1 vez
      offCtx.shadowColor = '#00ff00';
      offCtx.shadowBlur = 20;

      // Desenha o caractere centralizado
      offCtx.fillStyle = '#00ff00';
      offCtx.fillText(char, size / 2, size / 2);

      return offCanvas;
    });
  }

  // ============================================================
  // 3. Loop de animação da Matrix (alta performance)
  // ============================================================
  drawMatrix(canvas: HTMLCanvasElement) {

    // Agenda frame seguinte
    this.animationFrameId = requestAnimationFrame(() => this.drawMatrix(canvas));

    // Efeito "trail": cria rastro suave e orgânico
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Loop pelas colunas
    for (let i = 0; i < this.drops.length; i++) {

      // Escolhe 0 ou 1 aleatoriamente
      const text = this.characters[Math.floor(Math.random() * this.characters.length)];

      // Calcula posição de desenho
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Seleciona o glifo neon pré-renderizado
      const img = this.glyphCache[text === '0' ? 0 : 1];

      // Desenha no canvas principal — operação leve e escalável
      this.ctx.drawImage(img, x, y - this.fontSize);

      // Reposiciona a coluna quando chega ao final
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      } else {
        this.drops[i]++;
      }
    }
  }

  // ============================================================
  // 4. Limpeza ao destruir componente (evita vazamento de memória)
  // ============================================================
  ngOnDestroy(): void {
   if (isPlatformBrowser(this.platformId)) {
    cancelAnimationFrame(this.animationFrameId);
  }
}
}
