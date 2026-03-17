import { Component } from '@angular/core';
import { DataItem } from '@swimlane/ngx-charts';
import { BarChart } from '@shared/component/bar-chart/bar-chart';
import { KpiDetails } from './kpi-details/kpi-details';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { TicketBreakdownDetails } from "./ticket-breakdown-details/ticket-breakdown-details";
import { generateRandomDataset } from '@shared/utils/util';

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

  constructor() {
    this.refreshDataset();
  }

  refreshDataset() {
    const data = generateRandomDataset(12)
    this.kpiData = this.kpiData?.map((x, i) => ({ ...x, value: data?.[i] }))
  }
}
