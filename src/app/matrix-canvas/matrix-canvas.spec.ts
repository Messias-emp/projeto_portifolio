import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCanvas } from './matrix-canvas';

describe('MatrixCanvas', () => {
  let component: MatrixCanvas;
  let fixture: ComponentFixture<MatrixCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixCanvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixCanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
