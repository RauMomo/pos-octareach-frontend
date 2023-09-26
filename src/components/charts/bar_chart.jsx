import * as echarts from 'echarts';
import { useEffect } from 'react';

export function BarChart() {
  useEffect(() => {
    // Initialize ECharts instance
    const chart = echarts.init(document.getElementById('echarts-container'));

    // ECharts options (replace this with your desired chart configuration)
    const options = {
      legend: {
        // Try 'horizontal'
        orient: 'vertical',
        right: 10,
        top: 0,
        bottom: 0
      },
      grid: {
      // Set margin values as needed (in pixels)
        left: '40vw',
        right: 0,
      },
      xAxis: {
        data: ['2023-09-14', '2023-09-15', '2023-09-16', '2023-09-17', '2023-09-18'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          barGap: 0,
          data: [2000, 900, 1400, 1750, 2400, 1600],
          itemStyle: {
            color: '#8B5CF6'
          }
        },
        {
          name: 'Purchases',
          type: 'bar',
          barGap: 0,
          data: [1600, 1200, 1000, 2300, 1700, 2250],
          itemStyle: {
            color: '#DFD1FD'
          }
        }
      ],
    };

    // Set the chart options
    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="echarts-container" style={{ width: '100%', height: '400px', marginBottom: '-16px' }} />;
}