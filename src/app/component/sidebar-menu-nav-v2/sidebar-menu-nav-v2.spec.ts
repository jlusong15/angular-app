import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuNavV2 } from './sidebar-menu-nav-v2';

describe('SidebarMenuNavV2', () => {
  let component: SidebarMenuNavV2;
  let fixture: ComponentFixture<SidebarMenuNavV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuNavV2],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMenuNavV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
