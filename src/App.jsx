import styles from './App.module.css'
import { Dashboard } from './Dashboard';

import { InputFile } from './InputFile';

function App() {
  return (
    <div className={styles.container}>
      <>
        <InputFile />
        <Dashboard />
      </>
    </div>
  )
}
export default App;