import {
    SEARCH_COINS,
    GET_COIN,
    SET_LOADING,
    CLEAR_COINS,
    HISTORICAL_CHART,
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case SEARCH_COINS:
        return {
          ...state,
          coins: action.payload,
          loading: false,
        };
      case CLEAR_COINS:
        return {
          ...state,
          coins: [],
          loading: false,
        };
      case GET_COIN:
        return {
          ...state,
          coin: action.payload,
          loading: false,
        };
        case HISTORICAL_CHART:
        return {
          ...state,
          prices: action.payload,
          loading: false,
        };
      
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      default:
        return state;
    }
  };