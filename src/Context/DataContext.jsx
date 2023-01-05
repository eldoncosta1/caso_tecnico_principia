import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [dataFile, setDataFile] = useState(() => {
    const file = localStorage.getItem('@principia@dataFile');

    if (file) {
      return JSON.parse(file);
    }
    return {};
  });

  const [extractByMonth, setExtractByMonth] = useState(() => {
    const fileExtractByMonth = localStorage.getItem('@principia@extractByMonth');
    console.log(fileExtractByMonth)
    if (fileExtractByMonth) {
      return JSON.parse(fileExtractByMonth);
    }
    return []
  });

  const [baddebtByMonth, setBaddebtByMonth] = useState(() => {
    const fileBaddebtByMonth = localStorage.getItem('@principia@baddebtByMonth');

    if (fileBaddebtByMonth) {
      return JSON.parse(fileBaddebtByMonth);
    }
    return [];
  });

  const [totalInadimplencia, setTotalInadimplencia] = useState(() => {
    const inadimplencia = localStorage.getItem('@principia#inadimplencia');

    if(!inadimplencia) return 0;

    return JSON.parse(inadimplencia)
  })

  // useEffect(() => {
  //   localStorage.setItem('@principia#inadimplencia', JSON.stringify(totalInadimplencia));

  // }, [totalInadimplencia]);

  useEffect(() => {
    localStorage.setItem('@principia@dataFile', JSON.stringify(dataFile));

  }, [dataFile]);

  useEffect(() => {
    console.log(extractByMonth)
    localStorage.setItem('@principia@extractByMonth', JSON.stringify(extractByMonth));

  }, [extractByMonth]);

  useEffect(() => {
    localStorage.setItem('@principia@baddebtByMonth', JSON.stringify(baddebtByMonth));

  }, [baddebtByMonth]);

  return (
    <DataContext.Provider value={{ dataFile, setDataFile, extractByMonth, setExtractByMonth, baddebtByMonth, setBaddebtByMonth }}>
      {children}
    </DataContext.Provider>
  )
}