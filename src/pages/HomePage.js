import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={classes.home}>
      <figure  className={classes.imageWrapper}>
        <h2 className={classes.title}>Guild Manager Tool</h2>
        <img
          className={classes.landingImage}
          src="https://cdn.wallpapersafari.com/84/78/onYRI3.jpg"
          alt="Illidan standing over the Black Temple"
        />
      </figure >
    </div>
  );
};
export default HomePage;
