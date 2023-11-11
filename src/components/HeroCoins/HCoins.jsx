import { useEffect, useState } from "react";
import axios from "axios";
import HCoinItems from "./HCoinItems";
import { motion } from "framer-motion";
const HCoins = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false&locale=en";

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
    <motion.div
      className="p-4 md:relative w-full flex justify-between mt-10 pt-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}>
      {coins.map((coins) => {
        return <HCoinItems coins={coins} key={coins.id} />;
      })}
    </motion.div>
  );
};

export default HCoins;
