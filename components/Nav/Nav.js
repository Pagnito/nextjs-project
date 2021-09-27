import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navPlaceholder}></div>

      <div className={styles.logo}>YouOnly</div>
      <div className={styles.burgerMenu}>
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
      </div>
    </div>
  );
}

export default Nav;