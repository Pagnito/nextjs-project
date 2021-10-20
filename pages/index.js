import Link from 'next/link';
import { getAllProducts, getCollection, getCollectionImages } from '../shopify';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import wrapper from '../store';
import FeaturedCollectionSectionOne from '../components/FeaturedCollectionSectionOne/FeaturedCollectionSectionOne';
import HalfScreenAdCard from '../components/HalfScreenAdCard/HalfScreenAdCard';
import ItemCardOne from '../components/ItemCardOne/ItemCardOne';
import TripleImageBanner from '../components/TripleImageBanner/TripleImageBanner';

function carouselArrow() {
  return (
    <div className={styles.carouselArrowContainer}>
      <div className={styles.carouselArrowDot}></div>
      <div className={[styles.carouselArrowDot, styles.carouselArrowDotMiddle].join(' ')}></div>
      <div className={styles.carouselArrowDot}></div>
    </div>
  )
}

function Home(props) {
  useEffect(() => {
  }, [props.products])

  let topProducts = props.products.features.topProducts.products.edges;
  let featuredCollections = props.products.features.tripleBannerFeatures
  return (
    <>
      <div className={styles.homeContainer}>
        <TripleImageBanner featuredCollections={featuredCollections} />
        <div className={styles.halfSceenAdsContainer}>
          <HalfScreenAdCard discount="60" collection={{ name: "Men's Collection" }} color="#FF2626" />
          <HalfScreenAdCard discount="40" collection={{ name: "Women's Collection" }} color="#BD1616" />
        </div>
        <FeaturedCollectionSectionOne>
          {topProducts.map((item, ind) => {
            return (
              <ItemCardOne key={item.node.id} data={item} width="33%" height="400px" />
            )
          })}
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
function stateToProps(state) {
  return {
    products: state.products
  }
}
export default connect(stateToProps, null)(Home)

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // let collections = await getCollectionImages("energy", "time", "be-whole")
  // store.dispatch({type: 'TRIPLE_BANNER_FEATURES', payload: collections})
  // console.log(collections)
  try {
    let pr = await Promise.all([getCollectionImages("energy", "time", "be-whole"), getCollection("be-whole")]);
    let collections = pr[0];
    let topProducts = pr[1];
    store.dispatch({ type: 'TRIPLE_BANNER_FEATURES', payload: collections })
    store.dispatch({ type: 'TOP_PRODUCTS', payload: topProducts })
  } catch (err) {
    console.log(err)
  }


});
// export async function getStaticProps() {
//   let products = await getAllProducts();


//   return {
//     props: {
//       products
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