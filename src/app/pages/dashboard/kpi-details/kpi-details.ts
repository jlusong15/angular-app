import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { DonutChart } from '@shared/component/donut-chart/donut-chart';
import { SimpleTable } from '@shared/component/simple-table/simple-table';
import { DatePicker } from 'primeng/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { DonutChartData, SimpleTableData } from './data';
import { CalendarRange, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-kpi-details',
  imports: [FormsModule, ReactiveFormsModule, DatePicker, DonutChart, SimpleTable, LucideAngularModule],
  templateUrl: './kpi-details.html',
  styleUrl: './kpi-details.css',
  standalone: true
})
export class KpiDetails implements OnDestroy {
  private destroy$ = new Subject<void>();
  Icons = {
    CalendarRange
  }
  date: Date | undefined = new Date();
  form = new FormGroup({
    selectedDate: new FormControl('')
  });

  donutChart = DonutChartData
  simpleTable = SimpleTableData


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
