import styles from './TripleImageBanner.module.css';
import Image from 'next/image';

function TripleImageBanner({ featuredCollections }) {
  let renderCollectionImages = () => {
    return featuredCollections.map(collection => {
      return (
        // on hover pull a random item out of collection
        <div key={collection.node.handle} className={styles.tripleImageBannerImageContainer}>
          <Image
            priority={true}
            layout='fill' objectPosition="top" src={collection.node.image.originalSrc} className={styles.tripleImageBannerImage} />
        </div>

      )
    })
  }
  return (
    <div className={styles.tripleImageBannerContainer}>

      {renderCollectionImages()}
      <div className={styles.tripleImageBannerButton}>Shop Now!</div>
      <div className={styles.redStripe}></div>

    </div>)

}

export default TripleImageBanner;