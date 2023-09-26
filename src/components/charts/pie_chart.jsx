import * as echarts from 'echarts';
import { useEffect } from "react";

export function PieChart({id}) {
    useEffect(() => {
    // Initialize ECharts instance
    const chart = echarts.init(document.getElementById(id));

    // ECharts options (replace this with your desired chart configuration)
    const options = {
      grid: {
      // Set margin values as needed (in pixels)
        left: '40vw',
        right: 0,
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          data: [
            {
              value: 335,
              name: 'Strawberry',
              itemStyle: {
                color: '#C4B5FD'
              }
            },
            {
              value: 234,
              name: 'Banana',
              itemStyle: {
                color: "#A78BFA"
              }
            },
            {
              value: 1548,
              name: 'Earphones',
              itemStyle: {
                color: "#883FFF"
              }
            },
            {
              value: 1548,
              name: 'Macbook Pro',
              itemStyle: {
                color: "#772CEE"
              }
            },
            {
              value: 1548,
              name: 'Sunglasses',
              itemStyle: {
                color: "#8B5CF6",
              }
            },
          ]
        }
      ],
    };

    // Set the chart options
    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [id]);

  return <div id={id} style={{ width: '100%', height: '20rem', marginBottom: '-32px'}} />;
}