"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PieController,
  BarController,
} from "chart.js";

// ⭐ MUST REGISTER CONTROLLERS + ELEMENTS
Chart.register(
  PieController,
  BarController,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface Props {
  result: any;
  onChartReady: (img: string) => void;
}

export default function Charts({ result, onChartReady }: Props) {
  const pieRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!result || !pieRef.current) return;

    const ctx = pieRef.current.getContext("2d");
    if (!ctx) return;

    // PIE CHART
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Stay", "Churn"],
        datasets: [
          {
            data: [
              1 - result.churn_probability,
              result.churn_probability,
            ],
            backgroundColor: ["#4ade80", "#f87171"],
          },
        ],
      },
    });

    // Export chart image
    setTimeout(() => {
      const img = pieRef.current?.toDataURL("image/png") || null;
      if (img) onChartReady(img);
    }, 500);

    return () => chart.destroy();
  }, [result]);

  if (!result) return null;

  return (
    <div className="mt-10 p-6 rounded-xl border bg-white">
      <h3 className="text-xl font-bold mb-4">Churn Probability Chart</h3>
      <canvas ref={pieRef} width={300} height={300}></canvas>
    </div>
  );
}
