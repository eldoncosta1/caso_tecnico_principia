import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataFile, setDataFile] = useState(() => {
    const file = localStorage.getItem('fileData');
    if (file) {
      return JSON.parse(file);
    }
    return {};
  }
  );

  const [extractByMonth, setExtractByMonth] = useState(() => {
    const fileExtract = localStorage.getItem('extractByMonth');
    if (fileExtract) {
      return JSON.parse(fileExtract);
    }
    return {};
  }
  );

  const [baddebtByMonth, setBaddebtByMonth] = useState(() => {
    const fileBaddebt = localStorage.getItem('baddebtByMonth');
    if (fileBaddebt) {
      return JSON.parse(fileBaddebt);
    }
    return {};
  }
  );


  return (
    <DataContext.Provider values={{ dataFile, setDataFile, extractByMonth, setExtractByMonth, baddebtByMonth, setBaddebtByMonth }}>
      {children}
    </DataContext.Provider>
  )
}