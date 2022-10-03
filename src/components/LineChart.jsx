// import React from 'react';
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Col, Row, Typography } from 'antd';
// import { Chart as ChartJS } from 'chart.js/auto'
// const { Title } = Typography;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

// const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  // const len = coinHistory?.data?.history?.length;
  // const ylen = coinHistory?.data?.history?.length;

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // for (let i = len-1; i > 0; i --) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // for (let i = ylen-1; i > 0; i --) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  console.log(coinHistory)  

  return (
    <>
      <Typography.Title level={2} className="chart-title">
        {coinName} Price Chart{" "}
      </Typography.Title>

      <Typography.Title level={5} className="price-change">
        Change: {coinHistory?.data?.change}%
      </Typography.Title>
      <Typography.Title level={5} className="current-price">
        Current {coinName} Price: $ {currentPrice}
      </Typography.Title>
      <Line data={data} options={options}/>
    </>
  );
};

export default LineChart;