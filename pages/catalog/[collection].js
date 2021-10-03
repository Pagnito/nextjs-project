import styles from './catalog.module.css';
import Link from 'next/link';
import ItemCardOne from '../../components/ItemCardOne/ItemCardOne';

function Catalog() {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.catalogBanner}>
        Be You.
        <br></br>
        Own The Style You Create.
      </div>
      <div className={styles.catalogTitle}>Collection<span style={{color: "#925778", marginLeft: '10px'}}>Street Swagger</span></div>
      <div className={styles.catalog}>
        <ItemCardOne width="33%" height="400px" hoverImage="/images/item-9.1.png" image="/images/item-9.0.png" />
        <ItemCardOne width="33%" height="400px" hoverImage="/images/item-10.1.png" image="/images/item-10.0.png" />
        <ItemCardOne width="33%" height="400px" hoverImage="/images/item-11.1.png" image="/images/item-11.0.png" />
        <ItemCardOne width="33%" height="400px" hoverImage="/images/item-12.1.png" image="/images/item-12.0.png" />
      </div>
    </div>
  );
}

export default Catalog;