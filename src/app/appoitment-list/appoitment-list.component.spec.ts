import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoitmentListComponent } from './appoitment-list.component';

describe('AppoitmentListComponent', () => {
  let component: AppoitmentListComponent;
  let fixture: ComponentFixture<AppoitmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoitmentListComponent]
    });
    fixture = TestBed.createComponent(AppoitmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
