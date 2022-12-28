
import styles from './InputFile.module.css'
import Papa from 'papaparse';
import { useState } from 'react';

export function InputFile() {
  const [fileData, setFileData] = useState([]);

  const onChangeHandler = async (e) => {
    e.preventDefault();

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setFileData(results.data)
      
      }
    })
  }
  console.log(fileData);

  return (
    <div className={styles.container}>
      <input type="file"
        name="file"
        accept=".csv"
        onChange={onChangeHandler}
      />
    </div>
  )
}