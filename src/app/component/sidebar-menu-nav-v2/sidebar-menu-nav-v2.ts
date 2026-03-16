import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cat, LucideAngularModule, Menu, X } from 'lucide-angular';
import { NavModel } from '../../types/nav.model';

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

  @Input() navigation: NavModel[] = []

  // Output to parent
  @Output() isOpenChange = new EventEmitter<boolean>();

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen); // send updated state to parent
  }

}
