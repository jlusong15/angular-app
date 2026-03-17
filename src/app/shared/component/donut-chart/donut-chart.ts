import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-donut-chart',
  imports: [ChartModule],
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.css',
  standalone: true
})
export class DonutChart implements OnInit, OnChanges {
  @Input() values: number[] | undefined;
  @Input() labels: string[] | undefined;
  @Input() containerClass: string = '';
  @Input() showLegend: boolean = true;
  data: ChartData<'doughnut'> | undefined;
  options: ChartOptions<'doughnut'> | undefined;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.renderChart();
  }

  ngOnChanges(e: any): void {
    console.log(e)
    this.renderChart();
  }

  renderChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const chartColor1 = documentStyle.getPropertyValue('--chart-1').trim();
      const chartColor2 = documentStyle.getPropertyValue('--chart-2').trim();

      this.data = {
        labels: this.labels || [],
        datasets: [
          {
            data: this.values || [],
            backgroundColor: [
              chartColor1,
              chartColor2,
            ],
          }
        ]
      };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            display: this.showLegend
          }
        }
      };
      this.cd.markForCheck();
    }

  }
}
