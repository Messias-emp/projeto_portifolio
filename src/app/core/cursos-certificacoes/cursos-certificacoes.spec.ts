import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCertificacoes } from './cursos-certificacoes';

describe('CursosCertificacoes', () => {
  let component: CursosCertificacoes;
  let fixture: ComponentFixture<CursosCertificacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCertificacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCertificacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
