import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePopularCyclesComponent } from './main-page-popular-cycles.component';

describe('MainPagePopularCyclesComponent', () => {
  let component: MainPagePopularCyclesComponent;
  let fixture: ComponentFixture<MainPagePopularCyclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPagePopularCyclesComponent]
    });
    fixture = TestBed.createComponent(MainPagePopularCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
