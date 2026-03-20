import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  @Input() items: MenuItem[] = [];
  @Input() showHomeIcon: boolean = true;
  home: MenuItem | undefined;

  constructor() {
    this.home = this.showHomeIcon ? { icon: 'pi pi-home' } : undefined;
  }
}
