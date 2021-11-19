import styles from "./PlayerListItem.module.css";
const PlayerListItem = (props) => {
  
  return (<li className={`${styles.player} ${styles[props.role]} ${styles[props.class]} ${styles[props.spec]} ${styles[props.status]} ${styles[props.gRank]}`} id={props.id} >
  <span className={styles.specIcon}></span>
   {props.name}
  <span className={styles.statusIcon}></span>
  <span className={styles.rankIcon}></span>
</li>)
};

export default PlayerListItem;
