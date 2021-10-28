import styles from './product.module.css';
import { connect } from 'react-redux';
import ProductPageImageCarousel from '../../components/ProductPageImageCarousel/ProductPageImageCarousel';
import ProductPageItemInfo from '../../components/ProductPageItemInfo/ProductPageItemInfo';
import { recursiveCatalog, getProduct } from '../../shopify';
import wrapper from '../../store';
import { useEffect } from 'react';

function ProductPage(props) {
  let uniqueByColor = [];
  let colors = [];
  let sizes = [];
  let uniqueBySize = [];
  useEffect(() => {
    document.body.firstChild.firstChild.scrollTo(0,0);
  }, []);

  function filterData(variants) { 
    variants.map((variant, i) => {
      if (colors.indexOf(variant.node.selectedOptions[0].value) < 0) {
        colors.push(variant.node.selectedOptions[0].value);
        uniqueByColor.push(variant.node);
      }
      if (sizes.indexOf(variant.node.selectedOptions[1].value) < 0) {
        sizes.push(variant.node.selectedOptions[1].value);
        uniqueBySize.push(variant.node)
      } 
    });
    return {
      uniqueByColor,
      uniqueBySize
    }
  }

  let filtered = filterData(props.product.product.data.productByHandle.variants.edges);

  return (
    <div className={styles.productPageContainer}>
      <ProductPageImageCarousel colors={colors} selectVariant={props.selectVariant} variantsByColor={filtered.uniqueByColor} />
      <ProductPageItemInfo variantsBySize={filtered.uniqueBySize} variantsByColor={filtered.uniqueByColor} selectVariant={props.selectVariant} />
    </div>
  );
}

function stateToProps(state) {
  return {
    product: state.products.pdp
  }
}

function selectVariant(dispatch, product) {
  dispatch({ type: 'PDP_SELECTED_VARIANT', payload: product})
}
function dispatchToProps(dispatch) {
  return {
    selectVariant: (product) => selectVariant(dispatch, product)
  }
}
export default connect(stateToProps, dispatchToProps)(ProductPage);




export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const product = await getProduct(params.product);
  let firstVariant = product.data.productByHandle.variants.edges[0].node.selectedOptions;
  let firstVariantValues = {
    color: firstVariant[0].value,
    size: firstVariant[1].value,
    colorIndex: 0
  }
  store.dispatch({ type: 'PDP_PRODUCT', payload: product });
  store.dispatch({ type: 'PDP_SELECTED_VARIANT', payload: firstVariantValues})
})

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