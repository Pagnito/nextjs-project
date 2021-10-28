import styles from './ProductPageImageCarousel.module.css';
import Image from 'next/image';
import { connect } from 'react-redux';
import { createRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';

function ProductPageImageCarousel({ variantsByColor, selected, colors, selectVariant }) {
  let nextBtn = createRef();
  let [swiperHolder, setSwiper] = useState(null);
  let selectedColor = {
    color: selected.selectedOptions[0].value,
    size: selected.selectedOptions[1].value
  }
  
  useEffect(()=>{
    swiperHolder && swiperHolder.slideTo(selected.index+1)  
  }, [swiperHolder, selected.selectedOptions[0].value]);
  function selectColor(swiper) {
    let index = swiper.activeIndex > 7 ? 1 : swiper.activeIndex < 1 ? 7 : swiper.activeIndex;
    let color = colors[index-1];
    selectedColor.color = color;
    selectedColor.colorIndex = index - 1;
    console.log(selectedColor)
    selectVariant(selectedColor);
  } 
  let images = variantsByColor.map((variant, i) => {
    return (
      <SwiperSlide key={`slide-${i}`}>
        <Image src={variant.image.originalSrc} alt={variant.image.altText} layout="fill" objectFit="cover" />
      </SwiperSlide>
    )
  });
  SwiperCore.use([Navigation, Pagination, Mousewheel])
  
  return (
    <div className={[styles.productPageImageCarousel].join('')}>
      <Swiper
        mousewheel
        onScroll={(swiper) => selectColor(swiper)}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextBtn.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setSwiper(swiper);
        }}
        style={{ '--swiper-navigation-color': '#BD1615', '--swiper-pagination-color': '#BD1615', 'height': '100%', 'width': '100%' }}

        pagination={{ clickable: true }}
        loop="true"
      >
        {images}
      </Swiper>

    </div>

  );
}
function stateToProps(state) {
  return {
    selected: state.products.pdp.selectedVariant
  }
}
export default connect(stateToProps, null)(ProductPageImageCarousel);