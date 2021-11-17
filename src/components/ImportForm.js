import classes from "./ImportForm.module.css";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ImportForm = (props) => {
  const [numberOfRaids, setNumberOfRaids] = useState("1");
  const [raidSize, setraidSize] = useState("10");
  const [isValid, setIsValid] = useState(true);

  const decreaseSizeHandler = (event) => {
    event.preventDefault();
    setraidSize((prevSize) => {
      if (+prevSize === 10) return prevSize;
      else return +prevSize - 15;
    });
  };
  const increaseSizeHandler = (event) => {
    event.preventDefault();
    setraidSize((prevSize) => {
      if (+prevSize === 40) return prevSize;
      else return +prevSize + 15;
    });
  };
  const decreaseNumHandler = (event) => {
    event.preventDefault();
    setNumberOfRaids((prevSize) => {
      if (+prevSize === 1) return prevSize;
      else return +prevSize - 1;
    });
  };
  const increaseNumHandler = (event) => {
    event.preventDefault();
    setNumberOfRaids((prevSize) => {
      if (+prevSize === 10) return prevSize;
      else return +prevSize + 1;
    });
  };
  const readFileInputHanlder = (event) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onerror = () => console.log(reader.error);
    reader.onload = () => {
      //temp way
      document.getElementById("csvImportField").value = reader.result;
      document.getElementById("csvImportField").disabled = true;
    };
  };
  return (
    <Modal onClick={props.onCloseImport}>
      <form>
        <div className={classes.title}>
          <h3>Raid Import</h3>
          <div className={classes.xButton}>
            <Button type="xButton" onClick={props.onCloseImport}>
              <FontAwesomeIcon icon={faWindowClose} size="2x" />
            </Button>
          </div>
        </div>
        <div className={classes.content}>
          <label htmlFor="csvImportField">Paste in your Raid CSV:</label>
          <textarea id="csvImportField" rows="10"></textarea>
          <label htmlFor="csvFileInputArea">
            Or import your CSV directly: &nbsp;
          </label>
          <input
            type="file"
            id="csvFileInputArea"
            accept=".csv"
            onChange={readFileInputHanlder}
          />
          <hr />
          <div className={classes.raidNumbersWrapper}>
            <div className={classes.raidNumbersDiv}>
              <label htmlFor="numberOfRaids">Number of Raids:</label>
              <br />
              <div className={classes.plusminusWrap}>
                <button
                  className={classes.plusminus}
                  onClick={decreaseNumHandler}
                >
                  -
                </button>
                <span>{numberOfRaids}</span>
                <button
                  className={classes.plusminus}
                  onClick={increaseNumHandler}
                >
                  +
                </button>
              </div>
            </div>
            <div className={classes.raidNumbersDiv}>
              <label htmlFor="numberOfRaiders">Raid Size:</label>
              <br />
              <div className={classes.plusminusWrap}>
                <button
                  className={classes.plusminus}
                  onClick={decreaseSizeHandler}
                >
                  -
                </button>
                <span>{raidSize}</span>
                <button
                  className={classes.plusminus}
                  onClick={increaseSizeHandler}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.buttonsWrapper}>
            <div className={classes.buttons}>
              <Button type="close" onClick={props.onCloseImport}>
                Close
              </Button>
            </div>
            <div className={classes.buttons}>
              <Button type="submit" onClick={props.onCloseImport}>
                Import
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default ImportForm;
