import { SET_LOADING } from "./constans";

const initState = {
  loaderTotal: {
    contact: true,
    client: true,
    footer: true,
    hero: true,
    navbar: true,
    news: true,
    pricing: true,
    services: true,
    servicesSale: true,
    strategy: true,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      let result = {
        ...state,
        loaderTotal: {
          ...state.loaderTotal,
          ...action.payload,
        },
      };
      return result;
    default:
      throw new Error("invalid action");
  }
}

export { initState };
export default reducer;
