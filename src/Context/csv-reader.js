import React from "react";

const CsvReader = React.createContext({
  sortedRaid:{},
  sortNewRaid: (csv) => {},
});

export default CsvReader;
