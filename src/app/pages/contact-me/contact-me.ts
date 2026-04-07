import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Breadcrumb } from '@shared/component/breadcrumb/breadcrumb';
import { EditorComponent } from "@shared/component/editor/editor";
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';
import { ToastService } from '@shared/services/toast.service';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-contact-me',
  imports: [RightSidebar, Breadcrumb, ButtonModule, EditorComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './contact-me.html',
  standalone: true,
})
export class ContactMe {
  readonly breadcrumbs = [{ label: 'Contact' }]

  form = new FormGroup({
    content: new FormControl('')
  });

  constructor(private toast: ToastService) { }

  submit() {
    console.log(this.form.value);
    this.toast.success('Thank you for leaving a message, however this is only a test contact form.');
  }
}
