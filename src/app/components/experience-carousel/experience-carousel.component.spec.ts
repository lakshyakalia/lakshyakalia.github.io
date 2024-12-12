import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCarouselComponent } from './experience-carousel.component';

describe('ExperienceCarouselComponent', () => {
  let component: ExperienceCarouselComponent;
  let fixture: ComponentFixture<ExperienceCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceCarouselComponent]
    });
    fixture = TestBed.createComponent(ExperienceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
