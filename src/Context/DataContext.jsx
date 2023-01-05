import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [dataFile, setDataFile] = useState(() => {
    const file = localStorage.getItem('');

    if (file) {
      return JSON.parse(file);
    }
    return {};
  });

  const [extractByMonth, setExtractByMonth] = useState(() => {
    const fileExtractByMonth = localStorage.getItem('');

    if (fileExtractByMonth) {
      return JSON.parse(fileExtractByMonth);
    }
    return {}
  });

  const [baddebtByMonth, setBaddebtByMonth] = useState(() => {
    const fileBaddebtByMonth = localStorage.getItem('');

    if (!fileBaddebtByMonth) {
      return JSON.parse(fileBaddebtByMonth);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('', JSON.stringify(dataFile));
    setDataFile(dataFile)
  }, [dataFile]);

  useEffect(() => {
    localStorage.setItem('', JSON.stringify(extractByMonth));
    setExtractByMonth(extractByMonth)
  }, [extractByMonth]);

  useEffect(() => {
    localStorage.setItem('', JSON.stringify(baddebtByMonth));
    setBaddebtByMonth(baddebtByMonth)
  }, [baddebtByMonth]);

  return (
    <DataContext.Provider value={{ dataFile, setDataFile, extractByMonth, setExtractByMonth, baddebtByMonth, setBaddebtByMonth }}>
      {children}
    </DataContext.Provider>
  )
}