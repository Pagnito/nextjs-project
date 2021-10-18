import Image from 'next/image';
import Link from 'next/link';
import ItemCardOne from '../components/ItemCardOne/ItemCardOne';
import FeaturedCollectionSectionOne from '../components/FeaturedCollectionSectionOne/FeaturedCollectionSectionOne';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import HalfScreenAdCard from '../components/HalfScreenAdCard/HalfScreenAdCard';

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
    fetch('http://localhost:4000/api/collection/featured')
      .then(res => res.json())
      .then(data => {

        setCollection(data);
      })
  }, [])
  let [featuredCollections, setCollection] = useState([]);

  let renderCollectionCards = () => {
    return featuredCollections.map(collection => {
      return (
        // on hover pull a random item out of collection
        <div key={collection.name} className={[styles.homeStripe].join(' ')}>
          <Image
          priority={true}
            layout='fill' objectPosition="top" src={collection.banner} className={styles.featuredStripeImage} />
        </div>

      )
    })
  }
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.landingCarousel}>
          {renderCollectionCards()}
        </div>
        <div className={styles.halfSceenAdsContainer}>
          <HalfScreenAdCard discount="60" collection={{ name: "Men's Collection" }} color="#FF2626" />
          <HalfScreenAdCard discount="40" collection={{ name: "Women's Collection" }} color="#BD1616" />
        </div>
        <FeaturedCollectionSectionOne>
          {featuredCollections.length > 0 ? featuredCollections[0].items.map((item, ind) => {
            return (
              <ItemCardOne key={item.name} data={item} width="33%" height="400px" />
            )
          }) : ''}
        </FeaturedCollectionSectionOne>
     


        <div className={styles.parralaxOne}>

        </div>
        <div className={styles.halfSceenAdsContainer}>
          <HalfScreenAdCard discount="60" collection={{ name: "Men's Collection" }} color="#414141" />
          <HalfScreenAdCard discount="40" collection={{ name: "Women's Collection" }} color="black" />
        </div>
        <div className={styles.parralaxTwo}>

        </div>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: 'blocking' }
// }