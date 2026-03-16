import { Component, Input, signal } from '@angular/core';
import { NavModel } from '../types/nav.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cat, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './menu-nav.html',
  styleUrl: './menu-nav.css',
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
