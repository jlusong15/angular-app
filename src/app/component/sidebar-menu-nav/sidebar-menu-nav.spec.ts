import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuNav } from './sidebar-menu-nav';

describe('SidebarMenuNav', () => {
  let component: SidebarMenuNav;
  let fixture: ComponentFixture<SidebarMenuNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuNav],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMenuNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
