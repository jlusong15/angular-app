import { Component } from '@angular/core';
import { FormSelect } from '@shared/component/form-select/form-select';

@Component({
  selector: 'app-ticket-breakdown-details',
  imports: [FormSelect],
  templateUrl: './ticket-breakdown-details.html',
  styleUrl: './ticket-breakdown-details.css',
  standalone: true
})
export class TicketBreakdownDetails {}
