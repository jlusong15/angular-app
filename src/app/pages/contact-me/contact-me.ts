import { Component } from '@angular/core';
import { Breadcrumb } from '@shared/component/breadcrumb/breadcrumb';
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';

@Component({
  selector: 'app-contact-me',
  imports: [RightSidebar, Breadcrumb],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
  standalone: true,
})
export class ContactMe {
  readonly breadcrumbs = [{ label: 'Contact' }]
}
