import { Table } from 'phosphor-react';
import styles from './App.module.css'
import { TableData } from './Components/TableData';
import { TableDataMonth } from './Components/TableDataMonth';
import { DataProvider } from './Context/DataContext';
import { Dashboard } from './Dashboard';
import { InputFile } from './InputFile';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <DataProvider>
      <Sidebar />
    </DataProvider>


  )
}
export default App;