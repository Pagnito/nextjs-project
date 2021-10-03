import Image from 'next/image';
import Link from 'next/link';
import ItemCardOne from '../components/ItemCardOne/ItemCardOne';
import { useState, useEffect } from 'react';
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
  useEffect(() => {
    fetch('http://localhost:3000/api/collection/featured')
      .then(res => res.json())
      .then(data => {
        setCollection(data);
      })
  }, [])
  let [featuredCollections, setCollection] = useState([]);

  let renderCollectionCards = () => {
    return featuredCollections.map(collection => {
      console.log(collection.name)
      return (
        <div key={collection.name} className={styles.homeStripeScrollHiderWrapper}>
          <div className={[styles.homeStripe, styles.stripeThree].join(' ')}>
            <div className={styles.shopIntro}>
              <ItemCardOne key={1} width="100%" height="400px" image={collection.item_one.hoverImage} hoverImage={collection.item_one.image} data={collection} />
              <ItemCardOne key={2} width="50%" height="180px" image={collection.item_two.hoverImage} hoverImage={collection.item_two.image} data={collection} />
              <ItemCardOne key={3} width="50%" height="180px" image={collection.item_three.hoverImage} hoverImage={collection.item_three.image} data={collection} />
              <ItemCardOne key={4} width="100%" height="400px" image={collection.item_four.hoverImage} hoverImage={collection.item_four.image} data={collection} />
              <Link key={5} href={"/catalog/" + collection.name}><div className={styles.shopIntrosSopButton}>Shop Now!</div></Link>
            </div>
          </div>
        </div>
      )
    })
  }
    return (
      <>
        <div className={styles.homeContainer}>
          {/* {carouselArrow()} */}
          {renderCollectionCards()}
        </div>
      </>
    )

  
}
