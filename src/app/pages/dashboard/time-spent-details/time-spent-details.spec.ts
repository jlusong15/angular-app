import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentDetails } from './time-spent-details';

describe('TimeSpentDetails', () => {
  let component: TimeSpentDetails;
  let fixture: ComponentFixture<TimeSpentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSpentDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeSpentDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
