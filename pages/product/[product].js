import styles from './product.module.css';
import ProductPageImageCarousel from '../../components/ProductPageImageCarousel/ProductPageImageCarousel';
import ProductPageItemInfo from '../../components/ProductPageItemInfo/ProductPageItemInfo';
import {recursiveCatalog, getProduct} from '../../shopify';


function ProductPage(props) {
  console.log(props)
  return ( 
    <div className={styles.productPageContainer}>
      <ProductPageImageCarousel images={props} />
      <ProductPageItemInfo data={props} />
    </div>
   );
}

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product
    }
  }
}
export async function getStaticPaths() {
  const products = await recursiveCatalog();

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false
  }
}