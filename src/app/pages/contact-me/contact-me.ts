import { Component } from '@angular/core';
import { Breadcrumb } from '@shared/component/breadcrumb/breadcrumb';
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';
import { EditorComponent } from "@shared/component/editor/editor";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-me',
  imports: [RightSidebar, Breadcrumb, ButtonModule, EditorComponent],
  templateUrl: './contact-me.html',
  standalone: true,
})
export class ContactMe {
  readonly breadcrumbs = [{ label: 'Contact' }]
}
