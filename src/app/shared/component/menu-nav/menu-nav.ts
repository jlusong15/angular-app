import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cat, LucideAngularModule } from 'lucide-angular';
import { NavModel } from '@shared/types/nav.model';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './menu-nav.html',
})
export class MenuNav {
  readonly CatIcon = Cat;

  @Input() navigation: NavModel[] = []

  mobileOpen = signal(false)
  profileOpen = signal(false)

  toggleMobile() {
    this.mobileOpen.update(v => !v)
  }

  toggleProfile() {
    this.profileOpen.update(v => !v)
  }
}
