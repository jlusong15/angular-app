import { Component } from '@angular/core';
import { Breadcrumb } from '@shared/component/breadcrumb/breadcrumb';
import { EditorComponent } from "@shared/component/editor/editor";
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';
import { ToastService } from '@shared/services/toast.service';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-contact-me',
  imports: [RightSidebar, Breadcrumb, ButtonModule, EditorComponent],
  templateUrl: './contact-me.html',
  standalone: true,
})
export class ContactMe {
  readonly breadcrumbs = [{ label: 'Contact' }]

  constructor(private toast: ToastService) { }

  submit() {
    this.toast.success('Thank you for leaving a message, however this is only a test contact form.');
  }
}
