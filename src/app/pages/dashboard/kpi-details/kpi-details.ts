import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@shared/component/date-picker/date-picker';

@Component({
  selector: 'app-kpi-details',
  imports: [DatePicker, FormsModule, DatePipe],
  templateUrl: './kpi-details.html',
  styleUrl: './kpi-details.css',
  standalone: true
})
export class KpiDetails {
  selectedDate: Date = new Date();

  onDateSelected(date: Date) {
    console.log('Date selected:', date);
  }

}
