import HCoins from "./HeroCoins/HCoins";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="pt-6 " id="home">
      <div className=" mt-16 pt-5 ">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-[mona-sans] text-center text-3xl md:text-5xl text-white">
          The Best App to Buy, Sell and Swap
          <br />
          <span className="text_gradient italic  ">
            Cryptocurrencies and NFT's
          </span>
        </motion.h2>
        <p className="font-[mona-sans] text-center text-white text-xl ">
          With decentralized Blockhain technology at affordable price.
        </p>
      </div>
      <div>
        <HCoins />
      </div>
    </div>
  );
};

export default Hero;
