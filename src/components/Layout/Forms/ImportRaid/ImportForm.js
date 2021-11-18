import styles from "./ImportForm.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../FormUI/Form";
const ImportForm = (props) => {
  const history = useHistory();
  const [numberOfRaids, setNumberOfRaids] = useState("1");
  const [raidSize, setraidSize] = useState("10");
  const [textareaText, setTextareaText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [inputDisabled,setInputDisabled] = useState(false)
  useEffect(() => {
    setIsValid(textareaText.trim().length > 100);
  }, [textareaText]);
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
      setTextareaText(reader.result);
      setInputDisabled(true);
    };
  };
  const textareaHandler = (event) => {
    setTextareaText(event.target.value);
  };
  const formSubmitHandler = (event) => {
    history.push("/RaidBuilder");
    console.log(textareaText.trim);
    event.preventDefault();
    props.onCloseForm();
  };
  return (
    <Form
      formTitle="Raid Import"
      onCloseForm={props.onCloseForm}
      onSubmit={formSubmitHandler}
      isFormValid={isValid}
    >
      <label htmlFor={styles.csvImportField}>Paste in your Raid CSV:</label>
      <textarea
       disabled={inputDisabled}
        value={textareaText}
        id={styles.csvImportField}
        rows="10"
        onChange={textareaHandler}
      ></textarea>
      <label htmlFor={styles.csvFileInputArea}>
        Or import your CSV directly: &nbsp;
      </label>
      <input
        type="file"
        id={styles.csvFileInputArea}
        accept=".csv"
        onChange={readFileInputHanlder}
      />
      <hr />
      <div className={styles.raidNumbersWrapper}>
        <div className={styles.raidNumbersDiv}>
          <label htmlFor="numberOfRaids">Number of Raids:</label>
          <br />
          <div className={styles.plusminusWrap}>
            <button className={styles.plusminus} onClick={decreaseNumHandler}>
              -
            </button>
            <span>{numberOfRaids}</span>
            <button className={styles.plusminus} onClick={increaseNumHandler}>
              +
            </button>
          </div>
        </div>
        <div className={styles.raidNumbersDiv}>
          <label htmlFor="numberOfRaiders">Raid Size:</label>
          <br />
          <div className={styles.plusminusWrap}>
            <button className={styles.plusminus} onClick={decreaseSizeHandler}>
              -
            </button>
            <span>{raidSize}</span>
            <button className={styles.plusminus} onClick={increaseSizeHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};
export default ImportForm;
