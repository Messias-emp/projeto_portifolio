import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsImpact } from './skills-impact';

describe('SkillsImpact', () => {
  let component: SkillsImpact;
  let fixture: ComponentFixture<SkillsImpact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsImpact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsImpact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
