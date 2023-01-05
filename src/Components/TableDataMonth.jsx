import styles from './TableDataMonth.module.css'

export function TableDataMonth() {
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

              <tr>
                <td>Janeiro - 2022</td>
                <td>R$ 0.250</td>

              </tr>

              <tr>
                <td>Fevereiro - 2022</td>
                <td>R$ 0.287</td>

              </tr>

              <tr>
                <td>Março - 2022</td>
                <td>R$ 0.541</td>

              </tr>

              <tr>
                <td>Abril - 2022</td>
                <td>R$ 0.533</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}