import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatePicker } from 'primeng/datepicker';
import { Subject, takeUntil } from 'rxjs';
// import { DatePicker } from '@shared/component/date-picker/date-picker';

@Component({
  selector: 'app-kpi-details',
  imports: [FormsModule, DatePipe, ReactiveFormsModule, DatePicker],
  templateUrl: './kpi-details.html',
  styleUrl: './kpi-details.css',
  standalone: true
})
export class KpiDetails {
  private destroy$ = new Subject<void>();
  date: Date | undefined = new Date();
  form = new FormGroup({
    selectedDate: new FormControl('')
  });

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      selectedDate: [new Date()]
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
        console.log(x);
      });
  }


  onDateSelected(date: Date) {
    console.log('Date selected:', date);
  }

}
