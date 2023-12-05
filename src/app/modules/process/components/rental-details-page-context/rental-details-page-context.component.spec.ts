import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsPageContextComponent } from './rental-details-page-context.component';

describe('RentalDetailsPageContextComponent', () => {
  let component: RentalDetailsPageContextComponent;
  let fixture: ComponentFixture<RentalDetailsPageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDetailsPageContextComponent]
    });
    fixture = TestBed.createComponent(RentalDetailsPageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
