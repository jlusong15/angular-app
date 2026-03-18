import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BarChart } from '@shared/component/bar-chart/bar-chart';
import { generateRandomDataset } from '@shared/utils/util';
import { DataItem } from '@swimlane/ngx-charts';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { KpiDetails } from './kpi-details/kpi-details';
import { TicketBreakdownDetails } from "./ticket-breakdown-details/ticket-breakdown-details";
import { TimeSpentDetails } from './time-spent-details/time-spent-details';
import { MonthsList } from '@shared/types/project.model';

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
  kpiData: DataItem[] = MonthsList?.map((x) => ({ name: x, value: 0 }));
  kPiTotalFinishedTickets = 0;
  annualMilestoneCompleted = 0;
  annualMilestonePending = 0;
  timeSpentRemaining = 0;
  timeSpentEstimated = 0;
  timeSpentLogged = 0;

  constructor() {
    this.refreshDataset()
  }

  refreshDataset() {
    this.refreshKpiData();
    this.refreshAnnualMilestoneData();
    this.refreshTimeSpentData();
  }

  refreshKpiData() {
    const data = generateRandomDataset(this.kpiData?.length, 1000);
    this.kpiData = this.kpiData?.map((x, i) => ({ ...x, value: data?.[i] }));
    this.kPiTotalFinishedTickets = this.kpiData.reduce((sum, item) => sum + item.value, 0);
  }

  refreshAnnualMilestoneData() {
    const data = generateRandomDataset(2);
    this.annualMilestoneCompleted = data?.[0];
    this.annualMilestonePending = data?.[1];
  }

  refreshTimeSpentData() {
    const data = generateRandomDataset(3);
    this.timeSpentRemaining = data?.[0];
    this.timeSpentEstimated = data?.[1];
    this.timeSpentLogged = data?.[2];
  }
}
