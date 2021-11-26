import styles from "./RaidBuilder.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback ,useContext} from "react";
import RaidContainer from "../components/SortableList/RaidContainer";
import RaidDescription from "../components/SortableList/RaidDescription";
import CsvReader from "../Context/csv-reader";

const RaidBuilder = () => {
  const csvCtx=useContext(CsvReader)
  const params = useParams();
  const [raid, setRaid] = useState({});
  const [sortedRaid, setSortedRaid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://guild-manager-720d2-default-rtdb.europe-west1.firebasedatabase.app/RHO/" +
          params.raidId +
          ".json"
      );
      const data = await response.json();

      setRaid(data);
      setSortedRaid(data.SortedRaids);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [params.raidId]);

  const saveHandler = async (raidToSave) => {
     await fetch(
      "https://guild-manager-720d2-default-rtdb.europe-west1.firebasedatabase.app/RHO/"+raid.ID+".json",
      {
        method: "PUT",
        body: JSON.stringify(raidToSave),
        headers: { "Content-Type": "application/json" },
      }
    ); 
  };

  useEffect(() => {
    
    csvCtx.setIsDragDisabled(true)
    fetchTeams();
  }, [fetchTeams]);

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

  if (error) {
    content = <RaidDescription>{error}</RaidDescription>;
  }

  if (isLoading) {
    content = <RaidDescription>Loading...</RaidDescription>;
  }
  const saveRaidHandler = () => {
    const toSave = {
      Name: raid.Name,
      Description: raid.Description,
      ID: raid.ID,
      Date: raid.Date,
      Time: raid.Time,
      SortedRaids: sortedRaid,
    };
    saveHandler(toSave);
  };
  const editHandler= ()=>{
    csvCtx.setIsDragDisabled(false)
  }
  return (
    <>
      <button onClick={saveRaidHandler}>Save</button>
      <button onClick={editHandler}>Enable Edit</button>
      <h2 className={styles.title}>Raid Builder</h2>

      {content}
    </>
  );
};
export default RaidBuilder;
