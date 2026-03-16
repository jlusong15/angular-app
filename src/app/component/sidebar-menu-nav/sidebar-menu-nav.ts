import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { House, LucideAngularModule, Mail, Menu, SquareCheckBig, X } from 'lucide-angular';
import { NavModel } from '../../types/nav.model';

@Component({
  selector: 'app-sidebar-menu-nav',
  templateUrl: './sidebar-menu-nav.html',
  styleUrl: './sidebar-menu-nav.css',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  standalone: true
})
export class SidebarMenuNav {
  readonly Icons = {
    Menu,
    Mail,
    House,
    Close: X,
    CheckSquare: SquareCheckBig,
  }

  @Input() navigation: NavModel[] = []

  mobileOpen = false;

  // Optional: detect large screens for permanent sidebar
  // get isLargeScreen() {
  //   return window.innerWidth >= 1024; // Tailwind lg breakpoint
  // }
}
