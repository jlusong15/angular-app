import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarMenuNavV2 } from './component/sidebar-menu-nav-v2/sidebar-menu-nav-v2';
import { NavLinks } from './types/nav.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LucideAngularModule, SidebarMenuNavV2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-app');
  navigation = NavLinks
  sidebarOpen = false;

  onSidebarToggle(isOpen: boolean) {
    this.sidebarOpen = isOpen;
  }
}
