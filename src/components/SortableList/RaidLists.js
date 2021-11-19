import { Fragment } from "react";
import PlayerList from "./PlayerList";
import styles from "./RaidLists.module.css";
const RaidLists = (props) => {
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
    props.teams.TeamComp.forEach((player) => {
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

  return <>{content}</>;
};

export default RaidLists;
