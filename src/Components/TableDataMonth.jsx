import { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext';
import styles from './TableDataMonth.module.css'

export function TableDataMonth() {
  const { dataFile } = useContext(DataContext);

  console.log(dataFile.length)
  useEffect(() => {
    //processa dataFile e salva as variaveis de estado

  }, [])

  return (

    <div className={styles.card}>
      <div className={styles.card_header}>
        <h3>Dados da Planilha</h3>
      </div>

      <div className={styles.card_body}>
        <div className={styles.table_responsive}>
          <table width='100%'>
            <thead>
              <tr>
                <td>Mês</td>
                <td>Inadimplência</td>

              </tr>
            </thead>
            <tbody>

             {dataFile.length > 0 ? dataFile.map(item => (
              <tr key={JSON.stringify(item)}>
                <td>{item.matricula}</td>
                <td>{item.mes}</td>
                <td>{item.valor}</td>
                <td>{item.status}</td>
              </tr>
             )) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}