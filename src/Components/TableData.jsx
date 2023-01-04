import styles from './TableData.module.css'

export function TableData() {
  return (
    <div className={styles.table}>
      <div className={styles.data}>
        <div className={styles.card}>

          <div className={styles.card_header}>
            <h3>Dados da Planilha</h3>
          </div>

          <div className={styles.card_body}>
            <table>
              <thead>
                <tr>
                  <td>Matricula</td>
                  <td>Mês</td>
                  <td>Valor</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>0001</td>
                  <td>Janeiro - 2022</td>
                  <td>R$ 1000</td>
                  <td>Pago</td>
                </tr>

                <tr>
                  <td>0001</td>
                  <td>Fevereiro - 2022</td>
                  <td>R$ 1000</td>
                  <td>Pago</td>
                </tr>

                <tr>
                  <td>0001</td>
                  <td>Março - 2022</td>
                  <td>R$ 1000</td>
                  <td>aberto</td>
                </tr>

                <tr>
                  <td>0001</td>
                  <td>Abril - 2022</td>
                  <td>R$ 1000</td>
                  <td>aberto</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}