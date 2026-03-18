import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { DonutChart } from '@shared/component/donut-chart/donut-chart';
import { FormDatePicker } from '@shared/component/form-date-picker/form-date-picker';
import { SimpleTable } from '@shared/component/simple-table/simple-table';
import { ProjectList, ProjectModel } from '@shared/types/project.model';
import { generateRandomDataset } from '@shared/utils/util';
import { CalendarRange, LucideAngularModule } from 'lucide-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-kpi-details',
  imports: [FormsModule, FormDatePicker, ReactiveFormsModule, DonutChart, SimpleTable, LucideAngularModule, DecimalPipe],
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
  donutChart = {
    data: [0],
    labels: ['Stories', 'Bugs']
  }
  simpleTable = {
    data: ProjectList,
    columns: [
      { field: 'projectName', header: 'Project Name', sortable: true },
      { field: 'stories', header: 'Stories' },
      { field: 'bugs', header: 'Bug' },
      { field: 'total', header: 'Total' }
    ]
  }
  form = new FormGroup({
    selectedDate: new FormControl('')
  });

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
    this.refreshDonutChart();
    this.refreshProjectTable();
  }

  refreshDonutChart() {
    this.donutChart = {
      labels: this.donutChart.labels,
      data: generateRandomDataset(this.donutChart.labels?.length, 2000)
    }
  }

  refreshProjectTable() {
    const len = ProjectList?.length;
    const newStories = generateRandomDataset(len)
    const newBugs = generateRandomDataset(len)
    const data = this.simpleTable.data?.map((x, index) => ({
      ...x,
      stories: newStories[index],
      bugs: newBugs[index],
      total: newStories[index] + newBugs[index]
    })) as ProjectModel[];
    this.simpleTable = {
      ...this.simpleTable,
      data
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
