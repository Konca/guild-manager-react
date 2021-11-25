import styles from "./RaidBuilder.module.css"
import RaidDescription from "../components/SortableList/RaidDescription";
import { useContext } from "react";
import CsvReader from "../Context/csv-reader";

const RaidBuilderNew = () => {
   const csvCtx= useContext(CsvReader)
  let content = <RaidDescription>No raid with this ID found.</RaidDescription>;
  console.log(csvCtx.sortedRaid)
  return (
    <>
      <h2 className={styles.title}>Raid Builder</h2>

      {content}
    </>
  );
};
export default RaidBuilderNew;
