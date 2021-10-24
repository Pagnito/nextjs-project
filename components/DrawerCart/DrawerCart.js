import styles from './DrawerCart.module.css';
import { useEffect, createRef } from 'react';
import { CSSTransition } from "react-transition-group";

function DrawerCart(props) {
  let drawerCartContainer = createRef();
  let drawerCart = createRef();
  let drawerCartBackground = createRef();

  useEffect(() => {
    if (props.display === 'none') {
      hideDrawerCart();
      document.body.firstChild.firstChild.style.overflow = 'unset';
    } else {
      showDrawerCart();
      document.body.firstChild.firstChild.style.overflow = 'hidden';
    }
  }, [props.display]);

  function showDrawerCart() {
    if (drawerCartContainer.current !== null && drawerCart.current!== null && drawerCartBackground.current!==null) {
      drawerCartContainer.current.style.display = 'block';
      setTimeout(() => {
        drawerCartBackground.current.style.opacity = '1';
      }, 100)
    }
    setTimeout(() => {
        drawerCart.current.style.transform = 'translateX(0%)'; 
    }, 100)
  }

  function hideDrawerCart() {
    if (drawerCartContainer.current !== null && drawerCart.current!== null && drawerCartBackground.current!==null) {
      drawerCart.current.style.transform = 'translateX(100%)';
    }
    drawerCartBackground.current.style.opacity = '0';
    setTimeout(() => {
      if (drawerCartContainer.current !== null) {
        drawerCartContainer.current.style.display = 'none';
      }
    }, 300)
  }
  return (
      <div ref={drawerCartContainer} className={styles.drawerCartContainer}>
        <div ref={drawerCartBackground} onClick={() => props.hideDrawerCart('none')} className={styles.drawerCartBackground}></div>
        <div ref={drawerCart} className={styles.drawerCart}>
          <div className={styles.drawerCartHeader}>
            <div className={styles.drawerCartTitle}>Shopping Cart</div>
            <div onClick={() => props.hideDrawerCart('none')} className={styles.drawerCartX}>
              <div className={styles.drawerCartXTopBar}></div>
              <div className={styles.drawerCartXBottomBar}></div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default DrawerCart;