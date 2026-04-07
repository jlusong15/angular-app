import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarMenuNavV2 } from '@shared/component/sidebar-menu-nav-v2/sidebar-menu-nav-v2';
import { ToastService } from '@shared/services/toast.service';
import { NavLinks } from '@shared/types/nav.model';
import { LucideAngularModule } from 'lucide-angular';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LucideAngularModule, SidebarMenuNavV2, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [MessageService, ToastService],
})
export class App {
  protected readonly title = signal('angular-app');
  navigation = NavLinks
  sidebarOpen = false;

  onSidebarToggle(isOpen: boolean) {
    this.sidebarOpen = isOpen;
  }
}
