import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainSliderComponent } from './main-page-main-slider.component';

describe('MainPageMainSliderComponent', () => {
  let component: MainPageMainSliderComponent;
  let fixture: ComponentFixture<MainPageMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainSliderComponent]
    });
    fixture = TestBed.createComponent(MainPageMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
