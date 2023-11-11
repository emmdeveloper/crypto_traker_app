import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
const Coin = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCoin(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1 },
  };
  console.log(coin);
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="text-white font-[mona-sans] bg-[#3089ee27] backdrop-blur">
      <div className="max-w-[840px] mx-auto my-4 py-[.7rem] px-4 flex flex-col shadow rounded-sm md:max-w-full m-2 p-2">
        <div className="max-w-[840px] mx-auto my-4 py-[.7rem] px-4 flex flex-col shadow rounded-sm">
          <h1 className="text-2xl text_gradient">{coin.name}</h1>
        </div>
        <div className="max-w-[840px] mx-auto my-4 py-[.7rem] px-4 flex flex-col shadow rounded-sm">
          <div
            className={
              coin.market_cap_rank <= 5
                ? `w-[75px] p-[.05rem] rounded-md mb-3 bg-lime-400`
                : `w-[75px] p-[.05rem] rounded-md mb-3 bg-cyan-500`
            }>
            <span className="">Rank # {coin.market_cap_rank}</span>
          </div>

          <div className="flex justify-between ">
            <div className="">
              {coin.image ? (
                <img src={coin.image.small} alt="coin-image" />
              ) : null}
              <p>{coin.name}</p>
              <p> {coin.symbol}</p>
            </div>
            <div className="flex items-center justify-center ml-[10rem] md:ml-[20rem]">
              {coin.market_data?.current_price ? (
                <h1 className="text-2xl">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className=" max-w-[740px] mx-auto my-4 py-1 md:py-[.7rem] px-4  md:flex flex-col shadow rounded-sm">
          <table>
            <thead className=" flex flex-col">
              <tr>
                <th className=" text-xs md:text-center p-[8px] text_gradient">
                  1h
                </th>
                <th className=" text-xs md:text-center  p-[8px] text_gradient">
                  24h
                </th>
                <th className="text-xs md:text-center  p-[8px] text_gradient">
                  7d
                </th>
                <th className="text-xs md:text-center  p-[8px] text_gradient">
                  14d
                </th>
                <th className="text-xs md:text-center  p-[8px] text_gradient">
                  30d
                </th>
                <th className="text-xs md:text-center  p-[8px] text_gradient">
                  1yr
                </th>
                <tbody>
                  <tr>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_1h_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_24h_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_7d_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_14d_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_30d_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td className="text-xs md:text-center  p-[8px]">
                      {coin.market_data?.price_change_percentage_1y_in_currency
                        .usd ? (
                        <p>
                          {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : (
                        null || "N/A"
                      )}
                    </td>
                  </tr>
                </tbody>
              </tr>
            </thead>
          </table>
        </div>
        <div className="max-w-[840px] mx-auto my-4 py-[.7rem] px-4 flex flex-col shadow rounded-sm">
          <div className="grid grid-cols-2">
            <div className="left">
              <div className="flex md:gap-3 gap-2 text-sm md:text-base my-[.6rem] mx-0 pb-[.5rem]">
                <h4 className="text_gradient">24 Hour Low:</h4>
                {coin.market_data?.low_24h.usd ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="flex md:gap-3 gap-2 text-sm md:text-base my-[.6rem] mx-0 pb-[.5rem]">
                <h4 className="text_gradient">24 Hour High:</h4>
                {coin.market_data?.high_24h.usd ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="flex md:gap-3 gap-2 text-sm md:text-base my-[.6rem] mx-0 pb-[.5rem]">
                <h4 className="text_gradient">Market Cap:</h4>
                {coin.market_data?.market_cap.usd ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="flex md:gap-3 gap-2 text-sm md:text-base my-[.6rem] mx-0 pb-[.5rem]">
                <h4 className="text_gradient">Circulating Supply:</h4>
                {coin.market_data?.circulating_supply ? (
                  <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[840px] mx-auto my-4 py-[.7rem] px-4 flex flex-col shadow rounded-sm">
          <div className="about">
            <h3 className="text_gradient">About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Coin;
