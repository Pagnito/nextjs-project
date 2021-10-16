import styles from './Nav.module.css';
import { createRef } from 'react/cjs/react.production.min';
import Image from 'next/image';
function Nav() {

  return (
    <>
      <div className={styles.mobileNavContainer}>
        <div className={styles.logo}>BeWhole</div>
        <input id="checkBoxForButton" className={styles.checkBoxForButton} type="checkbox"></input>
        <div className="drawerMenu"></div>
        <label htmlFor="checkBoxForButton" className="burgerMenu">
          <div className={styles.burgerMenuBar}></div>
          <div className={styles.burgerMenuBar}></div>
        </label>

      </div>
      <div className={styles.desktopNavContainer}>

        <div className={styles.navPlaceholder}></div>

        <div className={styles.logo}>BeWhole</div>

        <div className={styles.desktopIcons}>
          <Image height="23" width="23" src="/images/search.png" />
          <Image height="25" width="25" src="/images/profile.png" />
          <Image height="25" width="25" src="/images/heart.png" />
          <Image height="25" width="25" src="/images/shopping-cart.png" />
        </div>
      
      </div>
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
    </>
  );
}

export default Nav;