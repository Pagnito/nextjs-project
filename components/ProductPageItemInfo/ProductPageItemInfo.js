import { useEffect, useState } from 'react';
import styles from './ProductPageItemInfo.module.css';
import {connect} from 'react-redux'

function ProductPageItemInfo(props) {
  let selected = {
    color: props.selected.selectedOptions[0].value,
    size: props.selected.selectedOptions[1].value
  }

  useEffect(()=>{
  },[props.selected]);

  let colorIndex = 0;
  function selectVariant(variant) {
    props.selectVariant(variant)
  }
  function colors(){
    return (
      <div className={styles.productPageItemInfoColorsContainer}>
        {props.variantsByColor.map((variant, i) => {
          let color = variant.selectedOptions[0].value;
          let selectedColor = JSON.parse(JSON.stringify(selected));
          selectedColor.color = color;
          selectedColor.colorIndex = i;
          colorIndex = i;
          return (
            <div style={{color: selected.color === color ? 'white': 'black', backgroundColor: selected.color === color ? 'black': 'white'}}
             onClick={() => selectVariant(selectedColor)} key={variant.id} className={styles.productPageItemInfoColor}>{color}</div>
          )
        })}
      </div>
    )
  }
  function sizes() {
    return (
      <div className={styles.productPageItemInfoSizesContainer}>
        {props.variantsBySize.map((variant, i) => {
          let size = variant.selectedOptions[1].value;
          let selectedSize = JSON.parse(JSON.stringify(selected))
          selectedSize.size = size;
          selectedSize.colorIndex = colorIndex;
          return (
            <div onClick={() => selectVariant(selectedSize)} style={{color: selected.size === size ? 'white': 'black', backgroundColor: selected.size === size ? 'black': 'white'}}
              key={variant.id} className={styles.productPageItemInfoSize}>{size}</div>
          )
        })}
      </div>
    )
  }
  return ( 
    <div className={styles.productPageItemInfo}>
      <div className={styles.productPageItemInfoTitle}>{props.product.title}</div>
      <div className={styles.productPageItemInfoPrice}>{'$'+props.selected.priceV2.amount}</div>
      <div className={styles.productPageItemInfoColorTitle}>Colors</div>
      {colors()}
      <div className={styles.productPageItemInfoColorTitle}>Sizes</div>
      {sizes()}
    </div>

   );
}

function stateToProps(state) {
  return {
    product: state.products.pdp.product.data.productByHandle,
    selected: state.products.pdp.selectedVariant
  }
}

export default connect(stateToProps, null)(ProductPageItemInfo);