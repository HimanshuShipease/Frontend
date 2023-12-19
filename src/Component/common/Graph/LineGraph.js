// src/LineGraph.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Data',
        data: [10, 20, 15, 25, 30],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Set background color to transparent
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points
      },
    },
  };

  return (
    <div style={{ height: '35px', width: '102px' }}>
      {/* <h2>Linear Line Graph</h2> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
