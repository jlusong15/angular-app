import { Component, Input } from '@angular/core';
import { DataItem, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.css',
  standalone: true
})

export class BarChart {
  @Input() data: DataItem[] = [];
  @Input() xAxis: boolean = true;
  @Input() yAxis: boolean = true;
  @Input() legend: boolean = true;
  @Input() showDataLabel: boolean = true;
  @Input() showGridLines: boolean = true;
  @Input() roundEdges: boolean = false;

  colorScheme = {
    name: 'primary',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['var(--primary)']
  };

}
