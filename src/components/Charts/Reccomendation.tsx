"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function RecommendationChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Service Availability', 'Fault Tolerance', 'Performance', 'Security'],
          datasets: [{
            data: [25, 4, 4, 12],
            backgroundColor: ['#3B82F6', '#93C5FD', '#2563EB', '#1E40AF'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      return () => chart.destroy();
    }
  }, []);

  return <canvas ref={chartRef} />;
}