import React from "react";

const CsvReader = React.createContext({
  isDragDisabled:false,
  sortedRaid:{},
  isNewRaid:false,
  sortNewRaid: (csv) => {},
  setIsNewRaid: (isit) => {},
  setIsDragDisabled:(isit)=>{}
});

export default CsvReader;
