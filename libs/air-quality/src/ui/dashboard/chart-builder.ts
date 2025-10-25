import { ApexOptions } from 'apexcharts';

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap';

export class ChartBuilder {
  private options: ApexOptions = {};
  setTheme(): this {
    this.options.theme = {
      mode:
        localStorage?.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? 'dark'
          : 'light',
    };
    return this;
  }
  setPlotOptions(units: string[]): this {
    this.options.plotOptions = {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: '16px',
          formatter: function (seriesName, opts) {
            return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] + ' ' + (units[opts.seriesIndex] || '');
          },
        },
      },
    };
    return this;
  }
  setChartType(type: ChartType, height?: string | number | undefined): this {
    this.options.chart = {
      background: 'transparent',
      height: height || 320,
      type,
    };

    return this;
  }
  setResponsive(): this {
    this.options.responsive = [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ];
    return this;
  }

  setSeries(series: ApexAxisChartSeries | ApexNonAxisChartSeries): this {
    this.options.series = series;
    return this;
  }

  setLabels(labels: string[]): this {
    this.options.labels = labels;
    return this;
  }

  build(): ApexOptions {
    return { ...this.options };
  }
}
