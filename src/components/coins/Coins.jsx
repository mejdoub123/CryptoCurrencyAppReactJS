import React, { useContext } from "react";
import CoinItem from "./CoinItem";

import Spinner from "../layouts/Spinner";
import coingeckoContext from "../../context/coingecko/coingeckoContext";

const Coins = () => {
  const coinGeckoContext = useContext(coingeckoContext);
  const { loading, coins } = coinGeckoContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={coinStyle}>
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </div>
    );
  }
};

const coinStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Coins;