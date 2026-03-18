import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from "@angular/forms";
import { FormSelect } from '@shared/component/form-select/form-select';
import { LineChart } from '@shared/component/line-chart/line-chart';
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
  projectDropdown = [
    {
      name: 'Project 1',
      code: 'project1'
    },
    {
      name: 'Project 2',
      code: 'project2'
    },
    {
      name: 'Project 3',
      code: 'project3'
    },
    {
      name: 'Project 4',
      code: 'project4'
    },
    {
      name: 'Project 5',
      code: 'project5'
    },
  ]

  form = new FormGroup({
    project: new FormControl('')
  });

  chartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
  }]


  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      project: ['']
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDataset());
  }

  ngAfterViewInit(): void {
    this.form.get('project')?.setValue('project1')
    this.refreshDataset();
  }

  refreshDataset() {
    this.taskData = this.taskData?.map((data) => ({
      ...data,
      data: generateRandomDataset(12)
    }))
    this.bugsData = this.bugsData?.map((data) => ({
      ...data,
      data: generateRandomDataset(12)
    }))
    this.supportData = this.supportData?.map((data) => ({
      ...data,
      data: generateRandomDataset(12)
    }))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
