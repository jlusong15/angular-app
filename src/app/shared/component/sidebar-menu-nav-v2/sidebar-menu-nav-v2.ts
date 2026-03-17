import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinks } from '@shared/types/nav.model';
import { Cat, LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-sidebar-menu-nav-v2',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './sidebar-menu-nav-v2.html',
  styleUrl: './sidebar-menu-nav-v2.css',
  standalone: true
})
export class SidebarMenuNavV2 {
  readonly Icons = {
    MyIcon: Cat,
    Menu,
    Close: X,
  }
  readonly navigation = NavLinks;

  @Output() isOpenChange = new EventEmitter<boolean>();

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

}
