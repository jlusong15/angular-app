import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-form-switch',
  imports: [ToggleSwitchModule, ReactiveFormsModule],
  templateUrl: './form-switch.html',
  styleUrl: './form-switch.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSwitch),
      multi: true,
    },
  ],
})
export class FormSwitch implements ControlValueAccessor, AfterViewInit {
  private destroy$ = new Subject<void>();
  @Input() disabled: boolean = false;

  @Output() onValueChanged = new EventEmitter<any>();

  @HostBinding('attr.tabindex') attrTabindex = null;
  @HostBinding('attr.id') attrId = null;
  @HostBinding('attr.disabled') attrDisabled = null;

  form: FormGroup = new FormGroup({
    switch: new FormControl('')
  });
  formSubmitted: boolean = false;
  isDisabled: boolean = false;

  constructor(private fb: UntypedFormBuilder, private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      switch: ['']
    });
  }

  get computedDisabled(): boolean {
    return this.disabled || this.isDisabled;
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => this.onChange(x?.switch));
  }

  value: any;

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
    this.form.get('switch')?.setValue(value);
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
