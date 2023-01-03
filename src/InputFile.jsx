import styles from './InputFile.module.css'
import Papa from 'papaparse';
import { useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/pt-br'
moment.locale('pt-br');

export function InputFile() {
  const [fileData, setFileData] = useState([]);

  const onChangeHandler = async (e) => {
    e.preventDefault();

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      // dynamicTyping: true,
      complete: function (results) {
        setFileData(results.data.map(item => {
          item.valor = Number(item.valor);
          item.mes = moment(item.mes).format('MMMM YYYY')
          return item;
        }));
      }
    })
  }

  function groupBy(array, key) {
    return array.reduce((acc, item) => {
      if (!acc[item[key]]) acc[item[key]] = [];
      acc[item[key]].push(item);
      return acc;
    }, {})
  }

  console.log(fileData)

  const meses = groupBy(fileData, "mes");
  console.log(meses)

  const keys = Object.keys(meses);
  console.log(keys)

  const extractByMonth = [];
  const baddebtByMonth = [];

  for (let i = 0; i < keys.length; i++) {

    const keyI = keys[i];
    let _valorAberto = 0;
    let _valorTotal = 0;
    let _valorPago = 0;

    for (let j = 0; j <= i; j++) {
      const keyJ = keys[j];
      _valorAberto += meses[keyJ]
        .filter((item) => item.status == "aberto")
        .reduce((acc, item) => acc + parseFloat(item.valor), 0);
      _valorPago += meses[keyJ]
        .filter((item) => item.status == "pago")
        .reduce((acc, item) => acc + parseFloat(item.valor), 0);
      _valorTotal += meses[keyJ]
        .reduce((acc, item) => acc + parseFloat(item.valor), 0);
    }

    extractByMonth.push({
      mes: keyI,
      valorPago: _valorPago,
      valorAberto: _valorAberto,
      valorTotal: _valorTotal
    })

    const badDebt = _valorAberto / _valorTotal;
    baddebtByMonth.push({
      mes: keyI,
      inadiplencia: badDebt,
    })
  }
  console.log(extractByMonth);
  console.log(baddebtByMonth);



  // const selectMonths = Object.values(fileData.reduce(function (months, item) {
  //   months[item.mes] = months[item.mes] || []
  //   months[item.mes].push(item)
  //   return months
  // }, {}));
  // console.log(selectMonths)

  // let total = 0;
  // const valorTotal = [...Array.from(new Set(mesUm.forEach(element => {
  //   total += element.valor
  // })))]
  // console.log(`Valor total do mês: $${total}`);



  // let totalAberto = 0;
  // const valorTotalAberto = [...Array.from(new Set(mesUmaberto.forEach(element => {
  //   totalAberto += element.valor
  // })))]
  // console.log(`Valor total em aberto do mês: $${totalAberto}`);

  // let inadiplenciaMesUm = (totalAberto / total).toFixed(3);
  // let inadiplenciaMesUmpercent = inadiplenciaMesUm * 100;

  // console.log(`Valor da inadiplência: ${inadiplenciaMesUm} ou ${inadiplenciaMesUmpercent}%`);

  // // const statusAberto = [...Array.from(new Set(mesUm.filter((item) => item.status === 'aberto')))]
  // // console.log(statusAberto);

  // // const statuspAgo = [...Array.from(new Set(mesUm.filter((item) => item.status === 'pago')))]
  // // console.log(statuspAgo);  


  return (
    <div className={styles.container}>
      <input type="file"
        name="file"
        accept=".csv"
        onChange={onChangeHandler}
      />
    </div>
  )
}