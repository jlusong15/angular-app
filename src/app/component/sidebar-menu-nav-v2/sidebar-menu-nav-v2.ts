import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { House, LucideAngularModule, Mail, Menu, SquareCheckBig, X } from 'lucide-angular';
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
    Menu,
    Mail,
    House,
    Close: X,
    CheckSquare: SquareCheckBig,
  }

  @Input() navigation: NavModel[] = []

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}
