import { DragDropContext } from "react-beautiful-dnd";
import PlayerList from "./PlayerList";
import styles from "./RaidLists.module.css";
const RaidLists = (props) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let colIndex;
    if (
      source.droppableId === "Tanks" ||
      source.droppableId === "Healers" ||
      source.droppableId === "Melee-DPS" ||
      source.droppableId === "Ranged-DPS"
    )
      colIndex = props.teams.findIndex((x) => x.TeamName === "Benched");
    else
      colIndex = props.teams.findIndex(
        (x) => x.TeamName === source.droppableId
      );
    const column = props.teams[colIndex];
    const newTeam = Array.from(column.TeamComp);
    newTeam.splice(source.index, 1);
    newTeam.splice(destination.index, 0, column.TeamComp[source.index]);
    const newTeams = [...props.teams];
    newTeams[colIndex].TeamComp = newTeam;
    props.setTeam(newTeams);
  };
  let content;
  if (props.type === "Raids") {
    content = (
      <div className={styles.raidCards}>
        {props.teams.map((team, i) => (
          <PlayerList key={"RaidTeam" + i} team={team} />
        ))}
      </div>
    );
  } else if (props.type === "Classes") {
    const bench = {
      tanks: { TeamName: "Tanks", TeamComp: [] },
      heals: { TeamName: "Healers", TeamComp: [] },
      melee: { TeamName: "Melee-DPS", TeamComp: [] },
      ranged: { TeamName: "Ranged-DPS", TeamComp: [] },
    };
    props.teams[0].TeamComp.forEach((player) => {
      switch (player.Role) {
        case "Tanks":
          bench.tanks.TeamComp.push(player);
          break;
        case "Healers":
          bench.heals.TeamComp.push(player);
          break;
        case "Melee-DPS":
          bench.melee.TeamComp.push(player);
          break;
        case "Ranged-DPS":
          bench.ranged.TeamComp.push(player);
          break;
        default:
          break;
      }
    });
    content = (
      <>
        <h3 className={styles.benchTitle}>{props.teams.TeamName}</h3>
        <div className={styles.raidCards}>
          <PlayerList key={bench.tanks.TeamName} team={bench.tanks} />
          <PlayerList key={bench.heals.TeamName} team={bench.heals} />
          <PlayerList key={bench.melee.TeamName} team={bench.melee} />
          <PlayerList key={bench.ranged.TeamName} team={bench.ranged} />
        </div>
      </>
    );
  }

  return <DragDropContext onDragEnd={onDragEnd}>{content}</DragDropContext>;
};

export default RaidLists;
