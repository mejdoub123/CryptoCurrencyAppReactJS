import React, { useState, useContext } from "react";

import coingeckoContext from "../../context/coingecko/coingeckoContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const coinGeckoContext = useContext(coingeckoContext);
  const alertConText = useContext(alertContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertConText.showAlert("Please enter a currency", "light");
    } else {
        coinGeckoContext.searchCoins(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Enter a Currency (USD, EUR)..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {coinGeckoContext.coins.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={coinGeckoContext.clearCoins}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;