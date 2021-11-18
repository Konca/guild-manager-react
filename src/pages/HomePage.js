import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <figure  className={styles.imageWrapper}>
        <h2 className={styles.title}>Guild Manager Tool</h2>
        <img
          className={styles.landingImage}
          src="https://cdn.wallpapersafari.com/84/78/onYRI3.jpg"
          alt="Illidan standing over the Black Temple"
        />
      </figure >
    </div>
  );
};
export default HomePage;
