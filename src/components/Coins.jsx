import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1 },
};
const Coins = ({ coins }) => {
  return (
    <motion.div
      className=" max-w-[1140px] mx-auto mt-[5rem]"
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      variants={variants}
      initial="hidden"
      animate="visible">
      <h2 className=" text-4xl font-[mona-sans] text-white">Market Now! </h2>
      <motion.div>
        <div className="pt-[2rem] flex justify-between items-center shadow rounded-md mx-8 my-4 p=[.7rem 1rem] font-[mona-sans] text-white">
          <p>#</p>
          <p className="ml-[-4rem]">Coin</p>
          <p>Prices</p>
          <p>24h-Change</p>
          <p className="hidden md:block">Volume</p>
          <p className="hidden md:block">Mkt Cap</p>
        </div>
        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Coins;
