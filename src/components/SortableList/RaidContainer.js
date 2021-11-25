//import styles from "./RaidContainer.module.css";
import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import RaidLists from "./RaidLists";

const RaidContainer = (props) => {
  //const [rawRaid, setRawRaid] = useState(props.raids);
  const [raidTeams, setRaidTeams] = useState([]);
  const [unsortedClasses, setUnsortedClasses] = useState([]);

  useEffect(() => {
    const raids = [],
      tank = [],
      healer = [],
      ranged = [],
      melee = [];
    props.raids.forEach((team) => {
      if (team.TeamName !== "Benched") {
        raids.push(team);
      } else {
        team.TeamComp.forEach((player) => {
          switch (player.Role) {
            case "Tank":
              tank.push(player);
              break;
            case "Healer":
              healer.push(player);
              break;
            case "Melee-DPS":
              melee.push(player);
              break;
            case "Ranged-DPS":
              ranged.push(player);
              break;

            default:
              break;
          }
        });
      }
    });
    setRaidTeams(raids);
    setUnsortedClasses([
      { TeamName: "Tanks", TeamComp: tank },
      { TeamName: "Healers", TeamComp: healer },
      { TeamName: "Melee-DPS", TeamComp: melee },
      { TeamName: "Ranged-DPS", TeamComp: ranged },
    ]);
  }, [props.raids]);
  const dragEndHandler = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const tempRaidVar = [...raidTeams, ...unsortedClasses];
    const dragSourceIndex = tempRaidVar.findIndex(
      (obj) => obj.TeamName === source.droppableId
    );
    const dropDestinationIndex = tempRaidVar.findIndex(
      (obj) => obj.TeamName === destination.droppableId
    );

    const draggedItem = tempRaidVar[dragSourceIndex].TeamComp[source.index];
    tempRaidVar[dragSourceIndex].TeamComp.splice(source.index, 1);
    tempRaidVar[dropDestinationIndex].TeamComp.splice(
      destination.index,
      0,
      draggedItem
    );

    props.saveRaid([
      ...raidTeams,
      {
        TeamName: "Benched",
        TeamComp: unsortedClasses
          .map((obj) => obj.TeamComp)
          .reduce((prevVal, currVal) => [...prevVal, ...currVal]),
      },
    ]);
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <RaidLists teams={raidTeams} />

      <RaidLists teams={unsortedClasses} />
    </DragDropContext>
  );
};

export default RaidContainer;
