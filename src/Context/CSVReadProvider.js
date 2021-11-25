import { useState } from "react";
import CsvReader from "./csv-reader";

const CSVReadProvider = (props) => {
  const [sortedCSV, setSortedCsv] = useState({});
  const sortNewRaidHandler = (csv) => {
    const blah = csv;
    console.log(blah);
    setSortedCsv(blah);
  };

  const raidContext = {
    sortedRaid: sortedCSV,
    sortNewRaid: sortNewRaidHandler,
  };
  return (
    <CsvReader.Provider value={raidContext}>
      {props.children}
    </CsvReader.Provider>
  );
};

export default CSVReadProvider;
