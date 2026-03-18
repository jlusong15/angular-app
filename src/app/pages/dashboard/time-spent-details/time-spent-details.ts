import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { FormSwitch } from '@shared/component/form-switch/form-switch';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-time-spent-details',
  imports: [FormSwitch, ReactiveFormsModule],
  templateUrl: './time-spent-details.html',
  styleUrl: './time-spent-details.css',
  standalone: true
})
export class TimeSpentDetails {
  private destroy$ = new Subject<void>();
  form = new FormGroup({
    includeBugs: new FormControl('')
  });

  get IncludeBugsFC() {
    return this.form.get('includeBugs') as FormControl;
  }

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      includeBugs: [false]
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDataset());
  }

  ngAfterViewInit(): void {
    this.refreshDataset();
  }

  refreshDataset() {
    console.log("refreshDataset")
    // const bugToggle = this.IncludeBugsFC?.value;
    // this.IncludeBugsFC?.setValue(!bugToggle);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
