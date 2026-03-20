import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule, QuillModule],
  templateUrl: './editor.html'
})
export class EditorComponent {
  @Input() height: string = '250px';
  @Input() placeholder: string = 'Type here...';

  editorControl = new FormControl('');

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image']
    ]
  };
}
