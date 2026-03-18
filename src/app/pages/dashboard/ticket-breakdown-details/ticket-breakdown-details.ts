import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from "@angular/forms";
import { FormSelect } from '@shared/component/form-select/form-select';
import { LineChart } from '@shared/component/line-chart/line-chart';
import { MonthsList, ProjectDropdownList } from '@shared/types/project.model';
import { generateRandomDataset } from '@shared/utils/util';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ticket-breakdown-details',
  imports: [FormSelect, FormsModule, ReactiveFormsModule, LineChart],
  templateUrl: './ticket-breakdown-details.html',
  styleUrl: './ticket-breakdown-details.css',
  standalone: true
})
export class TicketBreakdownDetails implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  projectDropdown = ProjectDropdownList;
  defaultProject = ProjectDropdownList[0]?.code;
  chartLabel = MonthsList;
  taskData = [{
    label: 'Tasks',
    data: [0]
  }]
  bugsData = [{
    label: 'Bugs',
    data: [0]
  }]
  supportData = [{
    label: 'Support',
    data: [0]
  }];
  form = new FormGroup({
    project: new FormControl('')
  });

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      project: ['']
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDataset());
  }

  ngAfterViewInit(): void {
    this.form.get('project')?.setValue(this.defaultProject)
    this.refreshDataset();
  }

  refreshDataset() {
    this.taskData = this.taskData?.map((data) => ({
      ...data,
      data: generateRandomDataset(this.chartLabel.length)
    }))
    this.bugsData = this.bugsData?.map((data) => ({
      ...data,
      data: generateRandomDataset(this.chartLabel.length)
    }))
    this.supportData = this.supportData?.map((data) => ({
      ...data,
      data: generateRandomDataset(this.chartLabel.length)
    }))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
