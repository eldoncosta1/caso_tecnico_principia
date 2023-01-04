import styles from './App.module.css'
import { TableData } from './Components/TableData';
import { Dashboard } from './Dashboard';

import { InputFile } from './InputFile';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div className={styles.container}>
      <>
        <Sidebar />
      </>
    </div>
  )
}
export default App;