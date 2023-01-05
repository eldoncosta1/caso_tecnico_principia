import styles from './LineChart.module.css'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export function LineChart() {

  const data = {
    labels: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho"],
    datasets: [{
      label: 'Inadimplência Mensal',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'red',
      borderColor: 'blue',
      PointBorderColor: 'aqua',
      tension: 1
    }
    ]
  }

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 7
      }
    }
  }

  return (
    <div className={styles.container} >
      <Line data={data} options={options} />
    </div >
  )
}