import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { hexToRgba } from '@shared/utils/util';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';

export interface LineChartDataModel {
  label: string,
  data: string[] | number[],
  fill?: boolean;
  borderColor?: string;
  tension?: string;
  backgroundColor?: boolean
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
      const chartColor3 = documentStyle.getPropertyValue('--chart-3').trim();
      const chartColor4 = documentStyle.getPropertyValue('--chart-4').trim();
      const chartColor5 = documentStyle.getPropertyValue('--chart-5').trim();
      const chartColors = [
        chartColor1, chartColor2, chartColor3, chartColor4, chartColor5
      ]
      const datasets = [...(this.values || [])]?.map((i, index) => ({
        label: i?.label ?? '',
        data: i?.data ?? [],
        fill: i?.fill ?? false,
        borderColor: i?.borderColor ?? chartColors[index],
        tension: i?.tension ?? 0.4,
        backgroundColor: i?.backgroundColor ? chartColors[index]?.replace(')', ' / 0.4)') : 'white'
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
