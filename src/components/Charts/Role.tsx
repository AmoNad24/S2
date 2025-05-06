"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function RoleChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Admin', 'Read-Only', 'DevOps', 'Security', 'Custom'],
          datasets: [{
            data: [15, 25, 18, 10, 30],
            backgroundColor: [
              '#3B82F6', // Blue
              '#10B981', // Green
              '#F59E0B', // Yellow
              '#8B5CF6', // Purple
              '#EF4444'  // Red
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
                font: {
                  family: "'Red Hat Display', sans-serif"
                }
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      });

      return () => chart.destroy();
    }
  }, []);

  return <canvas ref={chartRef} />;
}