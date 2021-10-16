import styles from './FeaturedCollectionSectionOne.module.css';


function FeaturedCollectionSectionOne({children}) {
  return (
    <div className={styles.featuredCollectionSectionOne}>
      <div className={styles.featuredCollectionSectionOneFiltersCont}>
        <div className={styles.featuredCollectionSectionOneFiltersTitle}>TOP PRODUCTS</div>
        <div className={styles.featuredCollectionSectionOneFilters}>
          <div className={styles.featuredCollectionSectionOneFilter}>FEATURED</div>
          <div className={styles.featuredCollectionSectionOneFilter}>NEWEST ARRIVALS</div>
          <div className={styles.featuredCollectionSectionOneFilter}>BEST SELLING</div>
        </div>
      </div>
      <div className={styles.featuredCollectionSectionOneCards}>
        {children}
      </div>
    </div>
  );
}

export default FeaturedCollectionSectionOne;