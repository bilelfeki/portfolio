import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceChoisesComponent } from './experience-choises.component';

describe('ExperienceChoisesComponent', () => {
  let component: ExperienceChoisesComponent;
  let fixture: ComponentFixture<ExperienceChoisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceChoisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceChoisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
