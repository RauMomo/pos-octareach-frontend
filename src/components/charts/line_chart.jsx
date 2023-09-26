import * as echarts from 'echarts';
import { useEffect } from 'react';

export function LineChart() {
  useEffect(() => {
    // Initialize ECharts instance
    const chart = echarts.init(document.getElementById('echarts-line-container'));

    // ECharts options (replace this with your desired chart configuration)
    const options = {
      legend: {
        // Try 'horizontal'
        orient: 'horizontal',
        top: '5%',
      },
      grid: {
      // Set margin values as needed (in pixels)
        left: '40vw',
        right: 0,
      },
      xAxis: {
        data: ['2023-09-14', '2023-09-15', '2023-09-16', '2023-09-17', '2023-09-18', '2023-09-19', '2023-09-20'],
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Payment Sent',
          type: 'line',
          barGap: 0,
          data: [2000, 900, 1400, 1750, 2400, 1600],
          itemStyle: {
            color: '#D5716D'
          }
        },
        {
          name: 'Payment Received',
          type: 'line',
          barGap: 0,
          data: [1600, 1200, 1000, 2300, 1700, 2250],
          itemStyle: {
            color: '#435664'
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

  return <div id="echarts-line-container" style={{ width: '100%', height: '400px', marginBottom: '-16px' }} />;
}