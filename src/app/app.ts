import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLinks } from './types/nav.model';
import { MenuNav } from './component/menu-nav/menu-nav';
import { SidebarMenuNav } from './component/sidebar-menu-nav/sidebar-menu-nav';
import { SidebarMenuNavV2 } from './component/sidebar-menu-nav-v2/sidebar-menu-nav-v2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuNav, SidebarMenuNav, SidebarMenuNavV2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-app');
  navigation = NavLinks
}
