"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchBitcoinData, BitcoinData } from '../lib/fetchBitcoinData';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
  }[];
}

const BitcoinChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: BitcoinData | null = await fetchBitcoinData();
      if (data) {
        const labels = Object.keys(data);
        const values = Object.values(data);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Bitcoin Price (USD)',
              data: values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        });
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Bitcoin Price Chart (Last 30 Days)</h2>
      <Line data={chartData} />
    </div>
  );
};

export default BitcoinChart;