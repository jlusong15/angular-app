import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBreakdownDetails } from './ticket-breakdown-details';

describe('TicketBreakdownDetails', () => {
  let component: TicketBreakdownDetails;
  let fixture: ComponentFixture<TicketBreakdownDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketBreakdownDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketBreakdownDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
