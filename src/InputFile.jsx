import { useContext, useEffect, useState } from 'react';
import { DataContext } from './Context/DataContext';
import styles from './InputFile.module.css'
import Papa from 'papaparse';
import moment from 'moment/moment';
import 'moment/locale/pt-br'

moment.locale('pt-br');

export function InputFile() {
  const [inputFileData, setinputFileData] = useState([]);
  const { setDataFile, setExtractByMonth, setBaddebtByMonth } = useContext(DataContext);

  const onChangeHandler = async (e) => {
    e.preventDefault();

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      // dynamicTyping: true,
      complete: function (results) {
        setinputFileData(results.data.map(item => {
          item.valor = Number(item.valor);
          item.mes = moment(item.mes).format('MMMM YYYY')
          return item;
        }));
      }
    })
  }

  useEffect(() => {
    console.log(inputFileData);
    const months = groupBy(inputFileData, "mes");
    // console.log(months)
    const keys = Object.keys(months);
    // console.log(keys)

    const extractByMonth = [];
    const baddebtByMonth = [];

    for (let i = 0; i < keys.length; i++) {

      const keyI = keys[i];
      let _totalAmountOpen = 0;
      let _totalAmountPaid = 0;
      let _totalAmount = 0;

      for (let j = 0; j <= i; j++) {
        const keyJ = keys[j];
        _totalAmountOpen += months[keyJ]
          .filter((item) => item.status == "aberto")
          .reduce((acc, item) => acc + parseFloat(item.valor), 0);
        _totalAmountPaid += months[keyJ]
          .filter((item) => item.status == "pago")
          .reduce((acc, item) => acc + parseFloat(item.valor), 0);
        _totalAmount += months[keyJ]
          .reduce((acc, item) => acc + parseFloat(item.valor), 0);
      }

      extractByMonth.push({
        mes: keyI,
        totalValorPago: _totalAmountPaid,
        totalValorAberto: _totalAmountOpen,
        valorTotal: _totalAmount
      })

      let inadimplencia = Number((_totalAmountOpen / _totalAmount).toFixed(3));
      baddebtByMonth.push({
        mes: keyI,
        inadimplencia: inadimplencia,
      })
    }
    setDataFile(inputFileData);
    setBaddebtByMonth(baddebtByMonth);
    setExtractByMonth(extractByMonth);
    // console.log(extractByMonth);
    // console.log(baddebtByMonth);
  }, [inputFileData])



  function groupBy(array, key) {
    return array.reduce((acc, item) => {
      if (!acc[item[key]]) acc[item[key]] = [];
      acc[item[key]].push(item);
      return acc;
    }, {})
  }


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