import styles from './HalfScreenAdCard.module.css';
function HalfScreenAdCard(props) {
  return ( 
    <div style={{height: '400px', backgroundColor: props.color}} className={styles.halfScreenAdCard}>
      <div className={styles.halfScreenAdCardDiscount}>{props.discount + '% Off'}</div>
      <div className={styles.halfScreenAdCardCollectionName}>{props.collection.name}</div>
      <div className={styles.halfScreenAdCardButton}>Shop Now</div>
    </div>
   );
}

export default HalfScreenAdCard;