import classes from "./OpenRaid.module.css";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

const ImportForm = (props) => {
  return (
    <Modal onClick={props.onCloseOpenRaid}>
      <form>
        <div className={classes.title}>Open an existing Raid</div>
        <div className={classes.content}>
          <label htmlFor="csvImportField" >Select a raid from the list:</label>
          <p  id="csvImportField"  > list of raids here</p >
        </div>
        <div className={classes.footer}>
          <div className={classes.buttonsWrapper}>
            <div className={classes.buttons}>
              <Button type="close" onClick={props.onCloseOpenRaid}>
                Close
              </Button>
            </div>
            <div className={classes.buttons}>
              <Button type="submit" onClick={props.onCloseOpenRaid}>
                Open
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default ImportForm;
