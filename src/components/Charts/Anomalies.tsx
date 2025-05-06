"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function AnomalyChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Anomalies',
              data: [0, 5, 0, 1, 3, 1, 0],
              backgroundColor: '#10B981',
              borderRadius: 4
            },
            {
              label: 'Fired Alerts',
              data: [0, 4, 0, 0, 2, 1, 0],
              backgroundColor: '#6366F1',
              borderRadius: 4
            },
            {
              label: 'Anomaly Trend',
              data: [0, 2, 1, 0.5, 1.5, 0.5, 0],
              type: 'line',
              borderColor: 'rgba(16, 185, 129, 0.5)',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2
            },
            {
              label: 'Alert Trend',
              data: [0, 1.5, 0.7, 0.2, 1.2, 0.4, 0],
              type: 'line',
              borderColor: 'rgba(99, 102, 241, 0.5)',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              
            },
            x: {
              grid: {
                display: false
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