import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CoinItem = ({ coin: { name, id, image } }) => {
  return (
    <div className="card text-center">
      <img
        src={image}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{name}</h3>
      <div>
        <Link to={`/coin/${id}`} className="brn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
CoinItem.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default CoinItem;