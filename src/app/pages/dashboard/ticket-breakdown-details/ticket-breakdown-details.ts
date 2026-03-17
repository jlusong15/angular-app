import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormSelect } from '@shared/component/form-select/form-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from "@angular/forms";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ticket-breakdown-details',
  imports: [FormSelect, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket-breakdown-details.html',
  styleUrl: './ticket-breakdown-details.css',
  standalone: true
})
export class TicketBreakdownDetails implements OnDestroy {
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


  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      project: ['']
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
        console.log(x);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
