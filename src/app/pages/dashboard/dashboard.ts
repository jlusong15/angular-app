import { Component } from '@angular/core';
import { DataItem } from '@swimlane/ngx-charts';
import { BarChart } from '@shared/component/bar-chart/bar-chart';
import { KpiDetails } from './kpi-details/kpi-details';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { TicketBreakdownDetails } from "./ticket-breakdown-details/ticket-breakdown-details";

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, BarChart, KpiDetails, TicketBreakdownDetails],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {
  Icons = {
    CalendarDays
  }
  kpiData: DataItem[] = [
    { name: 'Jan', value: 120 },
    { name: 'Feb', value: 150 },
    { name: 'Mar', value: 180 },
    { name: 'Apr', value: 170 },
    { name: 'May', value: 210 },
    { name: 'Jun', value: 250 },
    { name: 'Jul', value: 230 },
    { name: 'Aug', value: 260 },
    { name: 'Sep', value: 240 },
    { name: 'Oct', value: 280 },
    { name: 'Nov', value: 300 },
    { name: 'Dec', value: 350 }
  ];
}
