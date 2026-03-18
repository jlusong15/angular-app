import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BarChart } from '@shared/component/bar-chart/bar-chart';
import { generateRandomDataset } from '@shared/utils/util';
import { DataItem } from '@swimlane/ngx-charts';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { KpiDetails } from './kpi-details/kpi-details';
import { TicketBreakdownDetails } from "./ticket-breakdown-details/ticket-breakdown-details";
import { TimeSpentDetails } from './time-spent-details/time-spent-details';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, BarChart, KpiDetails, TicketBreakdownDetails, TimeSpentDetails, DecimalPipe],
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
  kPiTotalFinishedTickets = 0;
  annualMilestoneCompleted = 0;
  annualMilestonePending = 0;

  constructor() {
    this.refreshDataset()
  }

  refreshDataset() {
    this.refreshKpiData();
    this.refreshAnnualMilestoneData();
  }

  refreshKpiData() {
    const data = generateRandomDataset(12);
    this.kpiData = this.kpiData?.map((x, i) => ({ ...x, value: data?.[i] }))
    this.kPiTotalFinishedTickets = this.kpiData.reduce((sum, item) => sum + item.value, 0);
  }

  refreshAnnualMilestoneData() {
    const data = generateRandomDataset(2);
    this.annualMilestoneCompleted = data?.[0]
    this.annualMilestonePending = data?.[1]
  }
}
