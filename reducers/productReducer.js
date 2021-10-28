let init = {
  features: {},
  pdp: {
    selectedVariant: {}
  }
}

export default (state = init, action) => {
  switch (action.type) {
    case 'PDP_SELECTED_VARIANT':
      let selectedVariant = state.pdp.product.data.productByHandle.variants.edges.find(({node}) => {
        return node.selectedOptions[0].value == action.payload.color && node.selectedOptions[1].value == action.payload.size
      }).node;
      selectedVariant.index = action.payload.colorIndex;
      return {
        ...state,
        pdp: Object.assign(state.pdp, { selectedVariant: selectedVariant })
      }
    case 'PDP_PRODUCT':
      return {
        ...state,
        pdp: Object.assign(state.pdp, { product: action.payload })
      }
    case 'HOME_TOP_PRODUCTS':
      return {
        ...state,
        features: Object.assign(state.features, { topProducts: action.payload })
      }
    case 'HOME_TRIPLE_BANNER_FEATURES':
      return {
        ...state,
        features: Object.assign(state.features, { tripleBannerFeatures: action.payload })
      }
    default:
      return {
        ...state
      }
  }
}