import { motion } from "framer-motion";
const CoinItem = ({ coins }) => {
  const variants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      className="flex justify-between items-center shadow rounded-md mx-8 my-4 p=[.7rem 1rem] font-[mona-sans] text-white "
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      variants={variants}
      initial="hidden"
      animate="visible">
      <p>{coins.market_cap_rank}</p>
      <div className="flex items-center gap-2">
        <img
          src={coins.image}
          alt="coin image"
          className="w-[40px] h-[40px] mx-auto"
        />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden md:block">${coins.total_volume.toLocaleString()}</p>
      <p className="hidden md:block">${coins.market_cap.toLocaleString()}</p>
    </motion.div>
  );
};

export default CoinItem;
