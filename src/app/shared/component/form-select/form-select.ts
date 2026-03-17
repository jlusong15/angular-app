import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-form-select',
  imports: [SelectModule, ReactiveFormsModule],
  templateUrl: './form-select.html',
  styleUrl: './form-select.css',
  standalone: true,
})
export class FormSelect {
  data: City[] = [];
  form: FormGroup = new FormGroup({
    city: new FormControl('')
  });
  formSubmitted: boolean = false;


  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.form?.valid) {
      console.log(this.form)
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
      this.form?.reset();
      this.formSubmitted = false;
    }
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
