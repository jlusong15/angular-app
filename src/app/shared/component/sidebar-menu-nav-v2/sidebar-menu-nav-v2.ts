import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cat, House, LucideAngularModule, Mail, Menu, SquareCheckBig, X } from 'lucide-angular';

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

  navigation = [
    { name: 'Dashboard', icon: House, route: '/dashboard', current: true },
    { name: 'Tasks', icon: SquareCheckBig, route: '/tasks' },
    { name: 'Contact', icon: Mail, route: '/contact' },
  ];

  // Output to parent
  @Output() isOpenChange = new EventEmitter<boolean>();

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen); // send updated state to parent
  }

}
