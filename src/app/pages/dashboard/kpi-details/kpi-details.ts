import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { DonutChart } from '@shared/component/donut-chart/donut-chart';
import { SimpleTable } from '@shared/component/simple-table/simple-table';
import { DatePicker } from 'primeng/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { DonutChartData, SimpleTableData } from './data';
import { CalendarRange, LucideAngularModule } from 'lucide-angular';
import { generateRandomDataset } from '@shared/utils/util';

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

  get StoriesValue() {
    return this.donutChart?.data?.[0] ?? 0
  }

  get BugsValue() {
    return this.donutChart?.data?.[1] ?? 0
  }

  get OverallTickets() {
    return this.StoriesValue + this.BugsValue
  }

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      selectedDate: [new Date()]
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDataset());

    this.refreshDataset();
  }

  refreshDataset() {
    this.donutChart = {
      labels: this.donutChart.labels,
      data: generateRandomDataset(2)
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
