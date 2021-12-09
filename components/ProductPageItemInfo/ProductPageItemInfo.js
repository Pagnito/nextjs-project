import { useEffect, useState } from 'react';
import styles from './ProductPageItemInfo.module.css';
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group';

function ProductPageItemInfo(props) {
  let selected = {
    color: props.selected.selectedOptions[0].value,
    size: props.selected.selectedOptions[1].value,
    colorIndex: props.selected.index
  }

  // useEffect(()=>{
  // },[props.selected]);

  function selectVariant(variant) {
    props.selectVariant(variant);
  }

  function colors(){
    let colors = Object.keys(props.variants);
    return (
      <div className={styles.productPageItemInfoColorsContainer}>
        {colors.map((color, i) => {
          let selectedColor = JSON.parse(JSON.stringify(selected));
          selectedColor.color = color;
          selectedColor.colorIndex = i;
          return (
            <div style={{color: selected.color === color ? 'white': 'black', backgroundColor: selected.color === color ? 'black': 'white'}}
             onClick={() => selectVariant(selectedColor)} key={color} className={styles.productPageItemInfoColor}>{color}</div>
          )
        })}
      </div>
    )
  }
  function sizes() {
    let selectedColor = props.selected.selectedOptions[0].value;
    let sizes = Object.keys(props.variants[selectedColor]);
    return (
      <div className={styles.productPageItemInfoSizesContainer}>
        {sizes.map((size, i) => {
          let selectedSize = JSON.parse(JSON.stringify(selected))
          selectedSize.size = size;
          return (
            <div onClick={() => selectVariant(selectedSize)} style={{color: selected.size === size ? 'white': 'black', backgroundColor: selected.size === size ? 'black': 'white'}}
              key={size} className={styles.productPageItemInfoSize}>{size}</div>
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
      <div className={styles.productPageItemInfoQty}>
        <div className={styles.productPageItemInfoQtyMinusBtn}></div>
        {/* <input type="text" value={} className={styles.productPageItemInfoQtyInput}/> */}
        <div className={styles.productPageItemInfoQtyPlusBtn}></div>

      </div>
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