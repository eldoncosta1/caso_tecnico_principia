import styles from './InputFile.module.css'
import Papa from 'papaparse';
import { useState } from 'react';

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
          return item;
        }));
      }
    })
  }

  const selectMonths = Object.values(fileData.reduce(function (months, item) {
    months[item.mes] = months[item.mes] || []
    months[item.mes].push(item)
    return months
  }, {}));

  console.log(selectMonths)

  // let total = 0;
  // const valorTotal = [...Array.from(new Set(mesUm.forEach(element => {
  //   total += element.valor
  // })))]
  // console.log(`Valor total do mês: $${total}`);

  // const mesUmaberto = fileData.filter((item) => item.mes === '2022-01' && item.status === 'aberto')
  // // console.log(mesUmaberto)

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