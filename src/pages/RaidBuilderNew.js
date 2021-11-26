import styles from "./RaidBuilder.module.css";
import RaidDescription from "../components/SortableList/RaidDescription";
import { useContext, useEffect, useState } from "react";
import CsvReader from "../Context/csv-reader";
import RaidContainer from "../components/SortableList/RaidContainer";

const RaidBuilderNew = () => {
  const csvCtx = useContext(CsvReader);
  const [raid, setRaid] = useState("");
  const [sortedRaid, setSortedRaid] = useState([]);
  useEffect(() => {
    setRaid(csvCtx.sortedRaid);
    if (csvCtx.sortedRaid !== "") {
      setRaid(csvCtx.sortedRaid);
      setSortedRaid(csvCtx.sortedRaid.SortedRaids);
    }
  }, [csvCtx.sortedRaid]);
  const saveHandler = async (raidToSave, dataToSave) => {
    await fetch(
      "https://guild-manager-720d2-default-rtdb.europe-west1.firebasedatabase.app/RHO/" +
        raid.ID +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(raidToSave),
        headers: { "Content-Type": "application/json" },
      }
    );
      const response = await fetch(
        "https://guild-manager-720d2-default-rtdb.europe-west1.firebasedatabase.app/RHO/raids.json"
      );
      const data = await response.json();
      
      const index = data===null?0:data.findIndex((x)=>x.ID===raid.ID)===-1?data.length:data.findIndex((x)=>x.ID===raid.ID)
      
      await fetch(
        "https://guild-manager-720d2-default-rtdb.europe-west1.firebasedatabase.app/RHO/raids/"+index+".json",
        {
          method: "PUT",
          body: JSON.stringify(dataToSave),
          headers: { "Content-Type": "application/json" },
        }
      );
    
  };
  const saveRaidHandler = () => {
    const toSave = {
      Name: raid.Name,
      Description: raid.Description,
      ID: raid.ID,
      Date: raid.Date,
      Time: raid.Time,
      SortedRaids: sortedRaid,
    };
    const dataToSave = { Date: raid.Date, ID: raid.ID, Name: raid.Name };
    saveHandler(toSave,dataToSave);
  };
  let content = <RaidDescription>No raid with this ID found.</RaidDescription>;
  if (Object.keys(raid).length > 0) {
    content = (
      <>
        <RaidDescription
          raidInfo={{
            Name: raid.Name,
            Description: raid.Description,
            Date: raid.Date,
            Time: raid.Time,
          }}
        />
        <RaidContainer saveRaid={setSortedRaid} raids={sortedRaid} />
      </>
    );
  }
  return (
    <>
      <button onClick={saveRaidHandler}>Save</button>
      <h2 className={styles.title}>Raid Builder</h2>

      {content}
    </>
  );
};
export default RaidBuilderNew;
