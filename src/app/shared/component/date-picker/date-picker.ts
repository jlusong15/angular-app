import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-date-picker',
  imports: [DatePickerModule, FormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.css',
  standalone: true
})
export class DatePicker {
  @Input() value: Date | null = new Date(); // two-way binding optional
  @Input() placeholder: string = '';
  @Input() containerClass: string = '';
  @Input() dateFormat: string = 'yy-mm-dd';
  @Output() valueChange = new EventEmitter<any>();

  onDateSelect(event: any) {
    console.log(event)
    this.valueChange.emit(event);
  }
}
