import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFormComponent } from './main-page-form.component';

describe('MainPageFormComponent', () => {
  let component: MainPageFormComponent;
  let fixture: ComponentFixture<MainPageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageFormComponent]
    });
    fixture = TestBed.createComponent(MainPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
