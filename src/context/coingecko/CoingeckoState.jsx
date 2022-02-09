import React, { useReducer } from "react";
import axios from "axios";
import coingeckoContext from "./coingeckoContext";
import coingeckoReducer from "./coingeckoReducer";
import {
  SEARCH_COINS,
  GET_COIN,
  SET_LOADING,
  CLEAR_COINS,
  HISTORICAL_CHART
} from "../types";


const CoingeckoState = (props) => {
  const initialState = {
    coins: [],
    coin: {},
    prices:[],
    loading: false,
  };
  const [state, dispatch] = useReducer(coingeckoReducer, initialState);

  const searchCoins = async (currency) => {
    setLoading();
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    dispatch({ type: SEARCH_COINS, payload: res.data });
  };

  const searchCoin = async (id) => {
    setLoading();
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    dispatch({ type: GET_COIN, payload: res.data });
  };
  const historicalChart = async (id,days=30) => {
    setLoading();
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}`
    );
    dispatch({ type: HISTORICAL_CHART, payload: res.data.prices });
  };

  

  const clearCoins = () => dispatch({ type: CLEAR_COINS});

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <coingeckoContext.Provider
      value={{
        coins: state.coins,
        coin: state.coin,
        prices: state.prices,
        loading: state.loading,
        searchCoins,
        clearCoins,
        searchCoin,
        historicalChart
      }}
    >
      {props.children}
    </coingeckoContext.Provider>
  );
};

export default CoingeckoState;