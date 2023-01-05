import { DataContext } from './Context/DataContext';
import { useContext } from 'react';
import styles from './Dashboard.module.css'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Dashboard() {

  const { extractByMonth, baddebtByMonth } = useContext(DataContext);



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  // const labels = extractByMonth.map(
  //   function (index) {
  //     return index.mes;
  //   }
  // );

  // const datas = baddebtByMonth.map(
  //   function (item) {
  //     return parseFloat(item.inadimplencia)
  //   }
  // );

  const labels = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Inadimplência Mensal',
      data:
        // datas,
        [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [

        'rgba(54, 162, 235, 0.2)',

      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2.5
    }]

  };

  return (
    <div className={styles.container}>
      <Bar
        options={options}
        data={data} />
    </div>

  )
}