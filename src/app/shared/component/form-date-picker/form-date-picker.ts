import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, OnDestroy, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { CalendarRange, LucideAngularModule } from 'lucide-angular';
import { DatePicker } from 'primeng/datepicker';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-date-picker',
  imports: [ReactiveFormsModule, DatePicker, LucideAngularModule],
  templateUrl: './form-date-picker.html',
  styleUrl: './form-date-picker.css',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDatePicker),
      multi: true,
    },
  ],
})
export class FormDatePicker implements ControlValueAccessor, AfterViewInit, OnDestroy {
  readonly Icons = {
    CalendarRange
  }
  private destroy$ = new Subject<void>();
  @Input() disabled: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() dateFormat: string = 'MM d, yy';

  @Output() onValueChanged = new EventEmitter<any>();

  @HostBinding('attr.disabled') attrDisabled = null;

  form: FormGroup = new FormGroup({
    selectedDate: new FormControl('')
  });
  formSubmitted: boolean = false;
  isDisabled: boolean = false;

  constructor(private fb: UntypedFormBuilder, private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      selectedDate: ['']
    });
  }

  get computedDisabled(): boolean {
    return this.disabled || this.isDisabled;
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((form) => this.onChange(form?.selectedDate));
  }

  value: any;

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
    this.form.get('selectedDate')?.setValue(value);
    this.cd.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleChange(event: any) {
    this.value = event.value;
    this.onChange(this.value);
    this.onTouched();
    this.onValueChanged.emit(this.value);
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
