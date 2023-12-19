import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Graph = ({ borderColor }) => {
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [
      {
        label: ' ',
        data: [100,120,100,110],
        data2: [220,100,140,80],
        fill: false,
        tension: 0.1,
        borderWidth: "1px",
        borderColor: borderColor,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Remove x-axis
      },
      y: {
        display: false, // Remove y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Remove legend
      },
    },
    elements: {
      point: {
        radius: 0, // Remove data points
      },
    },
    tooltips: {
      enabled: false, // Remove tooltips
    },
  };

  return (
    <div style={{ height: '35px', width: '102px' }}>
      <Line type="monotone" data={data} options={options}/>
    </div>
  );
};

export default Graph;