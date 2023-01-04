import { CalendarCheck, ChartBar, CodepenLogo, FileCsv, ListDashes, MagnifyingGlass, Student, Table, Users } from "phosphor-react";
import { InputFile } from "./InputFile";
import styles from './Sidebar.module.css'
export function Sidebar() {
  return (

    <>
      <div className={styles.sidebar}>

        <div className={styles.sidebar_logo}>
          <h2><span><CodepenLogo size={32} weight="bold" /></span>Principia</h2>
        </div>

        <div className={styles.sidebar_menu}>


          <li><a href="" className={styles.active}><span><ChartBar size={32} /></span>
            <span>Estatística</span></a>
          </li>
          <li><a href=""><span><Table size={32} /></span>
            <span>Tabela de dados</span></a>
          </li>
          <li><a href=""><span><Users size={32} /></span>
            <span>Matriculas</span></a>
          </li>



        </div>
      </div>

      <div className={styles.main_container}>
        <header>
          <h2>
            <label for="">
              <span><ListDashes size={32} /></span>
            </label>
            Dashboard
          </h2>

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

          <div className={styles.cards}>

            <div className={styles.card_single}>
              <div>
                <h1>82</h1>
                <span>Matriculas</span>
              </div>
            </div>
            <div>
              <span><Student size={32} /></span>
            </div>

            <div className={styles.card_single}>
              <div>
                <h1>4</h1>
                <span>Meses</span>
              </div>
            </div>
            <div>
              <span><CalendarCheck size={32} /></span>
            </div>

          </div>


        </main>
      </div >
    </>
  )
}