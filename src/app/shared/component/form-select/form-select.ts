import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Subject, takeUntil } from 'rxjs';
interface FormSelectModel {
  name: string;
  code: string;
}

@Component({
  selector: 'app-form-select',
  imports: [SelectModule, ReactiveFormsModule],
  templateUrl: './form-select.html',
  styleUrl: './form-select.css',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelect),
      multi: true,
    },
  ],
})
export class FormSelect implements ControlValueAccessor, AfterViewInit {
  private destroy$ = new Subject<void>();
  @Input() list: FormSelectModel[] = [];
  @Input() placeholder: string = 'Select';
  @Input() disabled: boolean = false;

  @Output() onValueChanged = new EventEmitter<any>();

  @HostBinding('attr.tabindex') attrTabindex = null;
  @HostBinding('attr.id') attrId = null;
  @HostBinding('attr.disabled') attrDisabled = null;

  form: FormGroup = new FormGroup({
    select: new FormControl('')
  });
  formSubmitted: boolean = false;
  isDisabled: boolean = false;

  constructor(private fb: UntypedFormBuilder, private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      select: ['']
    });
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => this.onChange(x));
  }

  value: any;

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(obj: any): void {
    console.log('write', obj)
    this.value = obj;
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
    console.log('handleChange', event)
    this.value = event.value;
    this.onChange(this.value);
    this.onTouched();
    this.onValueChanged.emit(this.value);
  }

  get computedDisabled(): boolean {
    return this.disabled || this.isDisabled;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
