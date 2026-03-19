import { Component } from '@angular/core';
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';

@Component({
  selector: 'app-contact-me',
  imports: [RightSidebar],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
  standalone: true,
})
export class ContactMe {}
