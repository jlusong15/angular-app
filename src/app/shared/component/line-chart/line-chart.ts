import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';

export interface LineChartDataModel {
  label: string,
  data: string[] | number[]
}

@Component({
  selector: 'app-line-chart',
  imports: [ChartModule],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css',
  standalone: true
})
export class LineChart implements OnInit, OnChanges {
  @Input() values: LineChartDataModel[] | undefined;
  @Input() labels: string[] | undefined;
  @Input() containerClass: string = '';
  @Input() showLegend: boolean = true;
  @Input() showX: boolean = true;
  @Input() showXGrid: boolean = true;
  @Input() showY: boolean = true;
  @Input() showYGrid: boolean = true;
  data: ChartData<'line'> | undefined;
  options: ChartOptions<'line'> | undefined;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.renderChart();
  }

  ngOnChanges(): void {
    this.renderChart();
  }

  renderChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
      const chartColor1 = documentStyle.getPropertyValue('--chart-1').trim();
      const chartColor2 = documentStyle.getPropertyValue('--chart-2').trim();

      const datasets = [...(this.values || [])]?.map((i) => ({
        label: i?.label ?? '',
        data: i?.data ?? [],
        fill: false,
        borderColor: chartColor1,
        tension: 0.4
      }) as ChartDataset<'line'>)

      this.data = {
        labels: this.labels,
        datasets
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            display: this.showLegend,
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            display: this.showX,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: 'transparent',
              drawOnChartArea: this.showXGrid
            }
          },
          y: {
            display: this.showY,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: 'transparent',
              drawOnChartArea: this.showYGrid
            }
          }
        }
      };
      this.cd.markForCheck();
    }
  }
}
