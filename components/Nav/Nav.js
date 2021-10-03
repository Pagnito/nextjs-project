import styles from './Nav.module.css';
import { createRef } from 'react/cjs/react.production.min';

function Nav() {

  return (
    <div className={styles.navContainer}>

      <div className={styles.navPlaceholder}></div>

      <div className={styles.logo}>YouOnly</div>
      <input id="checkBoxForButton" className={styles.checkBoxForButton} type="checkbox"></input>
      <div className="drawerMenu">
    
      </div>
      <label htmlFor="checkBoxForButton" className="burgerMenu">
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
      </label>
      <style jsx>{`
      .burgerMenu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        right: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 10;
      }
      .drawerMenu {
        height: 100vh;
        width: 100%;
        background-color: white;
        position: absolute;
        top: 0;
        transform: translateX(100%);
        transition: all .5s ease-in-out;
        z-index:9;
        display: flex;
      }
        #checkBoxForButton:checked  + .drawerMenu {
          transform: translateX(0%);
        }
        .burgerMenu:hover + .drawerMenu {
          background-color: pink;
        }
      `}</style>
    </div>
  );
}

export default Nav;