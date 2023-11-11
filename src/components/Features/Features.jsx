import { motion } from "framer-motion";
const Features = () => {
  return (
    <div className="p-4" id="features">
      <div>
        <h2 className=" p-5 md:text-center font-[mona-sans] text-4xl relative text_gradient">
          Features
        </h2>
        <div className="card-container text-white md:flex gap-5 pt-10 px-4">
          <motion.div
            initial={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="feature_card_1 max-w-[500px] flex flex-col justify-center items-center rounded-md bg-[#ffffff2f] shadow p-8 hover:text_gradient_card hover:transition-colors">
            <img
              src="/secure_wallet.png"
              alt="secure-wallet"
              className="w-[400px]"
            />
            <h2 className="font-semibold font-[mona-sans] my-2 text-2xl">
              Secured Wallet
            </h2>
            <p className="font-[mona-sans]">
              In the world of cryptocurrencies, security is paramount. Secured
              crypto wallets are the foundation of this security, providing
              users with the means to protect their digital assets from a range
              of threats. It's crucial to select a wallet type that aligns with
              your specific needs and risk tolerance, but regardless of the
              type, practicing good security hygiene is essential. Regularly
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            className="feature_card_2 max-w-[500px] flex flex-col justify-center items-center rounded-md bg-[#ffffff2f] shadow p-8 hover:text_gradient_card hover:transition-all">
            <img src="/live_trading.png" alt="live_trading" />
            <h2 className="font-semibold font-[mona-sans] my-2 text-2xl">
              Live trading
            </h2>
            <p className="font-[mona-sans]">
              Crypto real-time trading is an exhilarating and potentially
              profitable endeavor, attracting traders and investors from around
              the world. However, it's important to understand that it comes
              with its own set of challenges and risks. Success in real-time
              trading requires not only a deep understanding of the
              cryptocurrency markets but also discipline, risk management, and a
              continuous commitment to monitoring and adapting to the
              ever-changing landscape of digital assets.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            className="feature_card_3 max-w-[500px] flex flex-col justify-center items-center rounded-md bg-[#ffffff2f] shadow p-8 hover:text_gradient_card hover:transition-all">
            <img src="/customer_service.png" alt="customer_service" />
            <h2 className="font-semibold font-[mona-sans] my-2 text-2xl">
              Customer Service
            </h2>
            <p className="font-[mona-sans]">
              customer service is an indispensable component of the crypto
              ecosystem. It not only assists users in navigating the intricacies
              of this emerging digital frontier but also fosters trust and
              confidence within the crypto community. The ability to deliver
              timely, knowledgeable, and secure support is fundamental in
              ensuring that users have a positive experience and are better
              equipped to harness the full potential of cryptocurrencies while
              mitigating potential risks.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
