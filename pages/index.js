import Image from 'next/image';
import Link from 'next/link';
import ItemCardOne from '../components/ItemCardOne/ItemCardOne';
import styles from '../styles/Home.module.css';

function carouselArrow() {
  return (
    <div className={styles.carouselArrowContainer}>
      <div className={styles.carouselArrowDot}></div>
      <div className={[styles.carouselArrowDot, styles.carouselArrowDotMiddle].join(' ')}></div>
      <div className={styles.carouselArrowDot}></div>
    </div>
  )
}
export default function Home() {

  return (
    <>
      <div className={styles.homeContainer}>
        {carouselArrow()}
        <div className={styles.homeStripeScrollHiderWrapper}>
          <div className={[styles.homeStripe, styles.stripeOne].join(' ')}>
            <div className={styles.shopIntro}>
              <ItemCardOne width="100%" height="400px" hoverImage="/images/item-1.1.png" image="/images/item-1.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-2.1.png" image="/images/item-2.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-3.1.png" image="/images/item-3.0.png" />
              <ItemCardOne width="100%" height="400px" hoverImage="/images/item-4.1.png" image="/images/item-4.0.png" />
              <div className={styles.shopIntrosSopButton}>Shop Now!</div>

            </div>
          </div>
        </div>
        <div className={styles.homeStripeScrollHiderWrapper}>
          <div className={[styles.homeStripe, styles.stripeTwo].join(' ')}>
            <div className={styles.shopIntro}>
            <ItemCardOne width="100%" height="400px" hoverImage="/images/item-5.1.png" image="/images/item-5.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-6.1.png" image="/images/item-6.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-7.1.png" image="/images/item-7.0.png" />
              <ItemCardOne width="100%" height="400px" hoverImage="/images/item-8.1.png" image="/images/item-8.0.png" />
              <div className={styles.shopIntrosSopButton}>Shop Now!</div>
            </div>
          </div>
        </div>
        <div className={styles.homeStripeScrollHiderWrapper}>
          <div className={[styles.homeStripe, styles.stripeThree].join(' ')}>
            <div className={styles.shopIntro}>
            <ItemCardOne width="100%" height="400px" hoverImage="/images/item-9.1.png" image="/images/item-9.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-10.1.png" image="/images/item-10.0.png" />
              <ItemCardOne width="50%" height="180px" hoverImage="/images/item-11.1.png" image="/images/item-11.0.png" />
              <ItemCardOne width="100%" height="400px" hoverImage="/images/item-12.1.png" image="/images/item-12.0.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.footer}></div> */}
    </>
  )
}
