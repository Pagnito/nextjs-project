import {HYDRATE} from 'next-redux-wrapper';
let init = {
  user: {},
  isAuth: false
}

export default (state = init, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload };

    default:
      return {
        ...state
      }
  }
}