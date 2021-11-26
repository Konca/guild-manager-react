import { useState } from "react";
import CsvReader from "./csv-reader";

const formatRaidKeyVals = (element /*, roster*/) => {
  // if (raid[i].ID != undefined)
  //if (roster[raid[i].ID.slice(0, -3)] === undefined) raid[i].Rank = "Pug";
  // else raid[i].Rank = roster[raid[i].ID.slice(0, -3)];
  const newElement = { ...element };

  if (element.Role === "Absence") return [];
  if (
    element.Role === "Tentative" ||
    element.Role === "Late" ||
    element.Role === "Bench"
  ) {
    newElement.Status = element.Role;
  } else {
    newElement.Status = "Signed";
  }
  switch (element.Spec) {
    case "Protection":
      newElement.Class = "Warrior";
      newElement.Role = "Tank";
      break;
    case "Protection1":
      newElement.Role = "Tank";
      newElement.Spec = "Protection";
      newElement.Class = "Paladin";
      break;
    case "Guardian":
      newElement.Class = "Druid";
      newElement.Role = "Tank";
      break;
    case "Restoration":
      newElement.Class = "Druid";
      newElement.Role = "Healer";
      break;
    case "Restoration1":
      newElement.Spec = "Restoration";
      newElement.Class = "Shaman";
      newElement.Role = "Healer";
      break;
    case "Holy":
    case "Discipline":
      newElement.Class = "Priest";
      newElement.Role = "Healer";
      break;
    case "Holy1":
      newElement.Spec = "Holy";
      newElement.Class = "Paladin";
      newElement.Role = "Healer";
      break;
    case "Arms":
    case "Fury":
      newElement.Class = "Warrior";
      newElement.Role = "Melee-DPS";
      break;
    case "Feral":
      newElement.Class = "Druid";
      newElement.Role = "Melee-DPS";
      break;
    case "Retribution":
      newElement.Class = "Paladin";
      newElement.Role = "Melee-DPS";
      break;
    case "Combat":
    case "Assassination":
    case "Subtlety":
      newElement.Class = "Rogue";
      newElement.Role = "Melee-DPS";
      break;
    case "Enhancement":
      newElement.Class = "Shaman";
      newElement.Role = "Melee-DPS";
      break;

    case "Balance":
      newElement.Class = "Druid";
      newElement.Role = "Ranged-DPS";
      break;
    case "Beastmastery":
    case "Marksmanship":
    case "Survival":
      newElement.Class = "Hunter";
      newElement.Role = "Ranged-DPS";
      break;
    case "Shadow":
      newElement.Class = "Priest";
      newElement.Role = "Ranged-DPS";
      break;
    case "Fire":
    case "Arcane":
    case "Frost":
      newElement.Class = "Mage";
      newElement.Role = "Ranged-DPS";
      break;
    case "Destruction":
    case "Demonology":
    case "Affliction":
      newElement.Class = "Warlock";
      newElement.Role = "Ranged-DPS";
      break;
    case "Elemental":
      newElement.Class = "Shaman";
      newElement.Role = "Ranged-DPS";
      break;
    default:
      break;
  }
  return [newElement];
};
function csvJSON(csv) {
  const lines = csv.split("\n").map((line) => line.split(","));
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i];
    for (let j = 0; j < lines[0].length; j++) {
      obj[lines[0][j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result); //JSON
}
const CSVReadProvider = (props) => {
  const [sortedCSV, setSortedCsv] = useState("");
  const [isNewRaid, setIsNewRaid] = useState(false);
  const [isDragDisabled, setIsDragDisabled] = useState(true);

  const sortNewRaidHandler = (csv, raidSize, noOfRaids) => {
    const arrCSV = csv.split("\n\n");
    const raidInfo = JSON.parse(csvJSON(arrCSV[0]));
   raidInfo[0].ID=raidInfo[0].Link.split("/")[6]
    console.log(raidInfo)
    const raidcomp = JSON.parse(csvJSON(arrCSV[1]));
    const formattedComp = raidcomp.flatMap((x) => formatRaidKeyVals(x));
    formattedComp.sort((s1, s2) =>
      s1.Spec < s2.Spec ? 1 : s1.Spec > s2.Spec ? -1 : 0
    );
    formattedComp.sort((c1, c2) =>
      c1.Class < c2.Class ? 1 : c1.Class > c2.Class ? -1 : 0
    );
    const emptyRaids = [];
    for (let i = 0; i < noOfRaids; i++)
      emptyRaids.push({ TeamName: "Raid " + (i + 1), TeamComp: [] });
    const raidObj = {
      ...raidInfo[0],
      SortedRaids: [
        ...emptyRaids,
        { TeamName: "Benched", TeamComp: formattedComp },
      ],
    };
    setSortedCsv(raidObj);
  };

  const raidContext = {
    isDragDisabled: isDragDisabled,
    sortedRaid: sortedCSV,
    isNewRaid: isNewRaid,
    sortNewRaid: sortNewRaidHandler,
    setIsNewRaid: setIsNewRaid,
    setIsDragDisabled: setIsDragDisabled,
  };
  return (
    <CsvReader.Provider value={raidContext}>
      {props.children}
    </CsvReader.Provider>
  );
};

export default CSVReadProvider;
