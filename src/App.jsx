import styles from './App.module.css'
import { LineChart } from './Components/LineChart';
import { TableData } from './Components/TableData';
import { DataProvider } from './Context/DataContext';
import { Dashboard } from './Dashboard';

import { InputFile } from './InputFile';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div className={styles.container}>

      <>
     
          <Sidebar />
      
      </>

    </div >

  )
}
export default App;