import styles from './ParallaxOne.module.css';
function ParallaxOne(props) {
  return (
    <div className={styles.parralaxOne}>
      <div className={styles.parallaxOneBox}>
        <h2 className={styles.parallaxOneTitle}>{props.title}</h2>
        <h1 className={styles.parallaxOneStatement}>Dress The Real You.</h1>
        <h3 className={styles.parallaxOneShortDescription}>{props.desc.substring(0, 200)}</h3>
        <button className={styles.parallaxOneButton}>VIEW MORE</button>
      </div>

    </div>
  );
}

export default ParallaxOne;