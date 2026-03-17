import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDetails } from './kpi-details';

describe('KpiDetails', () => {
  let component: KpiDetails;
  let fixture: ComponentFixture<KpiDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(KpiDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
