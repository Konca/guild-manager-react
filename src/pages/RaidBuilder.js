import styles from "./RaidBuilder.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import RaidLists from "../components/SortableList/RaidLists";
import { Fragment } from "react";
const RaidBuilder = () => {
  const params = useParams();
  const [raid, setRaid] = useState([]);
  const [raidTeams, setRaidTeams] = useState([]);
  const [unsortedClasses, setUnsortedClasses] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "../../../../dummy/" + params.raidId + ".json"
      );
      const data = await response.json();
      const teams = [];
      let bench = {};
      data.SortedRaids.forEach((team) => {
        team.TeamName !== "Benched" ? teams.push(team) : (bench = team);
      });

      setRaid(data);
      setRaidTeams(teams);
      setUnsortedClasses(bench);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [params.raidId]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);
  

  let content = (
    <div className={styles.raidInfo}>
      <p>No raid with this ID found.</p>
    </div>
  );

  if (raidTeams.length > 0) {
    content = <><RaidLists type="Raids" teams={raidTeams} /><RaidLists type="Classes" teams={unsortedClasses} /></>;
  }

  if (error) {
    content = (
      <div className={styles.raidInfo}>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    content = (
      <div className={styles.raidInfo}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.title}>Raid Builder</h2>
      <div className={styles.raidInfo}>
        <h3>{raid.Name}</h3>
        <p>{raid.Description}</p>
        <p>
          Starting on:&nbsp;{raid.Date}&nbsp;/&nbsp;{raid.Time}&nbsp;server
          time.
        </p>
      </div>
      {content}
    </div>
  );
};
export default RaidBuilder;
