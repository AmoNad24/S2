"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function ApiKeyChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Key-A1', 'Key-B2', 'Key-C3', 'Key-D4', 'Key-E5'],
          datasets: [{
            label: 'API Requests',
            data: [1023, 875, 654, 492, 321],
            backgroundColor: '#3B82F6',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.raw} requests`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              
              ticks: {
                callback: function(value) {
                  return value + ' reqs';
                }
              }
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