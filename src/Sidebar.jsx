import { CalendarCheck, ChartBar, CodepenLogo, FileCsv, ListDashes, MagnifyingGlass, Student, Table, Users } from "phosphor-react";
import { TableData } from "./Components/TableData";
import { Dashboard } from "./Dashboard";
import { InputFile } from "./InputFile";
import styles from './Sidebar.module.css'


export function Sidebar() {
  return (

    <>
      <div className={styles.sidebar}>

        <div className={styles.sidebar_logo}>
          <CodepenLogo size={32} weight="bold" />
          <h2>Principia</h2>
        </div>

        <div className={styles.sidebar_menu}>


          <li><a href="" className={styles.active}>
            <ChartBar size={32} />
            <span>Dashboard</span></a>
          </li>
          <li><a href=""><Table size={32} />
            <span>Tabela de dados</span></a>
          </li>
          <li><a href="">
            <Users size={32} />
            <span>Matriculas</span></a>
          </li>

        </div>
      </div>

      <div className={styles.main_container}>
        <header>
          <div className={styles.updatefile}>
            <ListDashes size={32} />
            {/* <h2>
              Dashboard
            </h2> */}
          </div>


          <div className={styles.updatefile}>
            <span> <FileCsv size={32} /></span>
            <InputFile />
          </div>

          <div className={styles.user_wrapper}>
            <img src="https://www.shutterstock.com/image-photo/
            beautiful-businesswoman-sit-workplace-office-600w-410689738.jpg"
              alt="" width="40px" height="40px" />

            <div>
              <h4>user person</h4>
              <small>Admin</small>
            </div>

          </div>
        </header >

        <main>

          <div className={styles.dashboard}>

            <div className={styles.cards}>
              <div className={styles.card_single}>
                <div>
                  <h1>82</h1>
                  <span>Matriculas</span>
                </div>
                <div>
                  <span><Student /></span>
                </div>
              </div>


              <div className={styles.card_single}>
                <div>
                  <h1>4</h1>
                  <span>Total Aberto</span>
                </div>
                <div>
                  <span><CalendarCheck /></span>
                </div>
              </div>

              <div className={styles.card_single}>
                <div>
                  <h1>4</h1>
                  <span>Total Pago</span>
                </div>
                <div>
                  <span><CalendarCheck /></span>
                </div>
              </div>

              <div className={styles.card_single}>
                <div>
                  <h1>4</h1>
                  <span>Meses</span>
                </div>
                <div>
                  <span><CalendarCheck /></span>
                </div>
              </div>
            </div>

            <div className={styles.barchart}>
              <Dashboard />
              <Dashboard />

            </div>
            <div className={styles.table}>
            <TableData />
            <TableData />
            </div>
          </div>





        </main>

      </div >

    </>
  )
}