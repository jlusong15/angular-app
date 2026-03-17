import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { DonutChart } from '@shared/component/donut-chart/donut-chart';
import { DatePicker } from 'primeng/datepicker';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-kpi-details',
  imports: [FormsModule, ReactiveFormsModule, DatePicker, DonutChart],
  templateUrl: './kpi-details.html',
  styleUrl: './kpi-details.css',
  standalone: true
})
export class KpiDetails implements OnDestroy {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
