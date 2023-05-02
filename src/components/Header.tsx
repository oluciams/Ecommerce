import styles from "../styles.module.css";

export const Header = (): JSX.Element => {

  return (
    <header className={styles["nabvar"]}>
      <a href="/">eCommerce</a>
      <nav >
        <a href="/"> Log In</a>
        <a href="/"> Sign Up</a>
      </nav>
    </header>
  );
};
