import classes from "./CssModules.module.scss";

export const CssModiles = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modiles -</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};
