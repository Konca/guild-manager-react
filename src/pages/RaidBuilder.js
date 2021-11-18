import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const RaidBuilder = () => {
    const params = useParams();
    const [raids, setRaids] = useState([]);
    const fetchRaidHistory = useCallback (async () => {
        const response = await fetch("../../../../dummy/"+params.raidId+".json");
        const data = await response.json();
        // const transformedRaids = data.raids.map((raidData) => {
        //   return { name: raidData.Name, date: raidData.Date, id: raidData.ID };
        // });
        setRaids(Object.keys(data).map);
      }, [params.raidId]);
    
      useEffect(() => {
        fetchRaidHistory();
      }, [fetchRaidHistory]);

  const clickHandler= ()=>{

    console.log( raids.SortedRaids)
  }
  return (
    <div>
      <h2>Raid Builder</h2>
      <p>{params.guildId}</p>
      <p>{params.raidId}</p>
      <p>{raids.Name}</p>
      <button onClick={clickHandler}>sadada</button>
    </div>
  );
};
export default RaidBuilder;
