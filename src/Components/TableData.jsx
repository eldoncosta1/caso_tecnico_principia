import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import styles from './TableData.module.css'

export function TableData() {

  // const { dataFile } = useContext(DataContext);
  // console.log(dataFile);

  return (
    <>
      <div className={styles.card}>

        <div className={styles.card_header}>

          <h3>Dados da Planilha</h3>
        </div>

        <div className={styles.card_body}>
          <div className={styles.table_responsive}>
            <table width='100%'>
              <thead>
                <tr>
                  <td>Matricula</td>
                  <td>Mês</td>
                  <td>Valor</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>

                {/* {dataFile.length === 0 ? <h2>sem dados</h2> : (

                  dataFile.map((item) =>
                    <tr>
                      <td>{item.matricula}</td>
                      <td>{item.mes}</td>
                      <td>{item.valor}</td>
                      <td>{item.status}</td>
                    </tr>
                  )

                )} */}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}