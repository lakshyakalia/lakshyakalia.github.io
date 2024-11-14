import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavLinksComponent } from './project-nav-links.component';

describe('ProjectNavLinksComponent', () => {
  let component: ProjectNavLinksComponent;
  let fixture: ComponentFixture<ProjectNavLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectNavLinksComponent]
    });
    fixture = TestBed.createComponent(ProjectNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
