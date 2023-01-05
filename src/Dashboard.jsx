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

  const { dataFile, extractByMonth, baddebtByMonth } = useContext(DataContext);
  console.log(dataFile);

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


  const labels = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Inadimplência Mensal',
      // data: baddebtByMonth.map(
      //   function (item) {
      //     return parseFloat(item.inadimplencia)
      //   }
      // ),
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
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
      borderWidth: 1
    }]

  };

  let _valorPago = 10.280;
  let _valorAberto = 5.840;
  let _valorTotal = (_valorPago + _valorAberto).toFixed(3);
  let _inadimplencia = (_valorAberto / _valorTotal).toFixed(3);

  return (
    <div className={styles.container}>

      {/* <div className={styles.valores}>
        <div>Total Pago <b>R$ {_valorPago}</b></div>
        <div>Total em aberto <b>R$ {_valorAberto}</b></div>
        <div>Total <b>R$ {_valorTotal}</b></div>
        <div>Inadimplência Total<b> R$ {_inadimplencia}</b></div>
      </div> */}

      <Bar
        options={options}
        data={data} />
    </div>

  )
}