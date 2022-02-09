import React, { Fragment, useContext, useEffect } from "react";
import Spinner from "../layouts/Spinner";
import { Link ,useParams} from "react-router-dom";
import coingeckoContext from "../../context/coingecko/coingeckoContext";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



const Coin = () => {
    const { id } = useParams();
  const coinGeckoContext = useContext(coingeckoContext);

  const { searchCoin, historicalChart,loading, coin,prices } = coinGeckoContext;
  useEffect(() => {
   searchCoin(id);
   historicalChart(id);
    //eslint-disable-next-line
  }, []);
  console.log(coin);
  const {
    image,
    name,
    
  } = coin;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      
      <div className="card grid-2">
        <div className="all-center">
          {image ?<img
            src={image.large}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          /> :
          <img
            src={image}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />}
          <h1> {name} </h1> 
         
        </div>
        
        <div>
        <Line
              data={{
                labels: prices.map((price) => {
                  let date = new Date(price[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: prices.map((price) => price[1]),
                    label: `Price ( Past 30 Days )`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            
        </div>
      </div>
      
    </Fragment>
  );
};

export default Coin;