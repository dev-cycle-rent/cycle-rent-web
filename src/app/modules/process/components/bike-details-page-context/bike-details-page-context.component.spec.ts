import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetailsPageContextComponent } from './bike-details-page-context.component';

describe('BikeDetailsPageContextComponent', () => {
  let component: BikeDetailsPageContextComponent;
  let fixture: ComponentFixture<BikeDetailsPageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeDetailsPageContextComponent]
    });
    fixture = TestBed.createComponent(BikeDetailsPageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
