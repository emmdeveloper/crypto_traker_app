import axios from "axios";
import { useState, useEffect } from "react";
import Coins from "./Coins";
import Coin from "../routes/Coin";
import { Routes, Route } from "react-router";
const CoinList = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1&sparkline=false&locale=en";
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default CoinList;
