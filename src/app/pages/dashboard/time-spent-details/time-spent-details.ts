import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { FormDatePicker } from '@shared/component/form-date-picker/form-date-picker';
import { FormSwitch } from '@shared/component/form-switch/form-switch';
import { LineChart } from '@shared/component/line-chart/line-chart';
import { SimpleTable } from '@shared/component/simple-table/simple-table';
import { ProjectList, ProjectModel } from '@shared/types/project.model';
import { generateRandomDataset } from '@shared/utils/util';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-time-spent-details',
  imports: [FormSwitch, FormDatePicker, LineChart, SimpleTable, ReactiveFormsModule],
  templateUrl: './time-spent-details.html',
  styleUrl: './time-spent-details.css',
  standalone: true
})
export class TimeSpentDetails {
  private destroy$ = new Subject<void>();
  form = new FormGroup({
    includeBugs: new FormControl(''),
    project: new FormControl('')
  });
  chartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  lineChartData = [{
    label: 'Time Spent',
    data: [0],
    fill: true,
    backgroundColor: true
  }]
  simpleTable = {
    data: ProjectList,
    columns: [
      { field: 'projectName', header: 'Project Name', sortable: true },
      { field: 'stories', header: 'Stories', sortable: false },
      { field: 'bugs', header: 'Bug', sortable: false },
      { field: 'total', header: 'Total' }
    ]
  }

  get IncludeBugsFC() {
    return this.form.get('includeBugs') as FormControl;
  }

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      includeBugs: [false],
      project: [new Date()]
    });


    Object.keys(this.form.controls).forEach(controlName => {
      this.form.get(controlName)?.valueChanges.subscribe(value => {
        if (controlName === 'project') {
          this.refreshProjectTable()
        }
        if (controlName === 'includeBugs') {
          this.refreshPast6Months()
        }
      });
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
    const newStories = generateRandomDataset(5)
    const newBugs = generateRandomDataset(5)
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
