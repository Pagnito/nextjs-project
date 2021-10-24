import styles from './ProductPageImageCarousel.module.css';

function ProductPageImageCarousel(props) {
  return (
    <div className={styles.productPageItemContainer}>
      <div className={styles.productPageItemImages}></div>
      <div className={styles.productPageItemInfo}></div>

    </div>
  );
}

export default ProductPageImageCarousel;