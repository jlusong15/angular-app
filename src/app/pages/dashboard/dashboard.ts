import { Component } from '@angular/core';
import { BarChart } from '@shared/component/bar-chart/bar-chart';
import { DataItem } from '@swimlane/ngx-charts';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { KpiDetails } from './kpi-details/kpi-details';
import { TicketBreakdownDetails } from "./ticket-breakdown-details/ticket-breakdown-details";
import { TimeSpentDetails } from './time-spent-details/time-spent-details';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, BarChart, KpiDetails, TicketBreakdownDetails, TimeSpentDetails],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {
  Icons = {
    CalendarDays
  }
  kpiData: DataItem[] = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Sep', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 }
  ];
}
