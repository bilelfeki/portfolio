import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoisesComponent } from './project-choises.component';

describe('ProjectChoisesComponent', () => {
  let component: ProjectChoisesComponent;
  let fixture: ComponentFixture<ProjectChoisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChoisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChoisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
