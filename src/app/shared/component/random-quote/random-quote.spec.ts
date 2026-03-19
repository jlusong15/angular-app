import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuote } from './random-quote';

describe('RandomQuote', () => {
  let component: RandomQuote;
  let fixture: ComponentFixture<RandomQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
