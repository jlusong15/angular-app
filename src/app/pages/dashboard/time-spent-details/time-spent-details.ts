import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { FormSwitch } from '@shared/component/form-switch/form-switch';
import { LineChart } from '@shared/component/line-chart/line-chart';
import { SimpleTable } from '@shared/component/simple-table/simple-table';
import { generateRandomDataset } from '@shared/utils/util';
import { Subject, takeUntil } from 'rxjs';
import { TimeSpentSimpleTableData } from './data';

@Component({
  selector: 'app-time-spent-details',
  imports: [FormSwitch, LineChart, SimpleTable, ReactiveFormsModule],
  templateUrl: './time-spent-details.html',
  styleUrl: './time-spent-details.css',
  standalone: true
})
export class TimeSpentDetails {
  private destroy$ = new Subject<void>();
  form = new FormGroup({
    includeBugs: new FormControl('')
  });
  chartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  lineChartData = [{
    label: 'Time Spent',
    data: [0],
    fill: true,
    backgroundColor: true
  }]
  simpleTable = TimeSpentSimpleTableData

  get IncludeBugsFC() {
    return this.form.get('includeBugs') as FormControl;
  }

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      includeBugs: [false]
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((form) => {
        console.log(form)
        if ('includeBugs' in form) {
          this.refreshPast6Months()
        }
        if ('project' in form) {
          this.refreshProjectTable()
        }
      });
  }

  ngAfterViewInit(): void {
    this.refreshDataset();
  }

  refreshDataset() {
    this.refreshPast6Months();
    this.refreshProjectTable();
  }

  refreshPast6Months() {
    this.lineChartData = this.lineChartData?.map((data) => ({
      ...data,
      data: generateRandomDataset(6)
    }))
  }

  refreshProjectTable() {
    // @@@TODO
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
