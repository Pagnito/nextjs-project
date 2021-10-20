let init = {
  features: {}
}

export default (state = init, action) => {
  switch (action.type) {
    case 'TOP_PRODUCTS':
      return {
       ...state,
       features: Object.assign(state.features, {topProducts: action.payload})   
      }
      case 'TRIPLE_BANNER_FEATURES':
      return {
       ...state,
       features: Object.assign(state.features, {tripleBannerFeatures: action.payload})
      }
    default:
      return {
        ...state
      }
  }
}