import { motion } from "framer-motion";
const About = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1 },
  };
  return (
    <div id="about">
      <div className="pt-14 mt-6 font-[mona-sans] text-white">
        <motion.div
          className="max-w-[640px] mx-auto text-center p-3"
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          variants={variants}
          initial="hidden"
          animate="visible">
          <h2 className=" text-4xl relative text_gradient">Our Mission</h2>
          <p className="md:text-xl">
            At Coindrance, our mission is to be at the forefront of the crypto
            revolution, facilitating a deeper understanding of digital assets,
            blockchain technology, and their potential to reshape the future of
            finance and beyond. We are committed to providing comprehensive,
            unbiased, and accessible information to help both beginners and
            experienced crypto enthusiasts navigate this exciting, ever-evolving
            landscape.
          </p>
        </motion.div>
        <motion.div
          className="max-w-[640px] mx-auto text-center p-3"
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          variants={variants}
          initial="hidden"
          animate="visible">
          <h2 className=" text-4xl relative text_gradient">Who we are?</h2>
          <p className="md:text-xl">
            Coindrance is a dedicated team of passionate individuals who share a
            common interest in cryptocurrencies and blockchain technology. We
            are cryptocurrency experts, blockchain enthusiasts, developers,
            writers, and financial professionals, all with a shared vision of
            creating a hub for crypto education and information. Our collective
            knowledge and expertise make us well-equipped to offer accurate,
            timely, and relevant content to our users.
          </p>
        </motion.div>
        <motion.div
          className="max-w-[1080px] mx-auto p-3"
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          variants={variants}
          initial="hidden"
          animate="visible">
          <h2 className="text-center text-4xl relative text_gradient">
            What we offer?
          </h2>

          <ul className="md:flex pt-5 items-center justify-center gap-5">
            <div>
              <li className="text-xl text-center">News and Updates</li>
              <p className="pt-2 text-center">
                Stay up-to-date with the latest news and developments in the
                crypto space. We provide timely news articles, analysis, and
                market insights to help you make informed decisions in the
                volatile world of digital assets.
              </p>
            </div>
            <div>
              <li className="text-xl text-center">Product Reviews</li>
              <p className="pt-2 text-center">
                Our team thoroughly evaluates crypto wallets, exchanges, and
                other related products to provide you with in-depth reviews,
                helping you make smart choices for your crypto journey.
              </p>
            </div>
            <div>
              <li className="text-xl text-center">Community Engagement</li>
              <p className="pt-2 text-center">
                We value our community, and we encourage interaction through
                comments, forums, and social media. We are here to answer your
                questions, address your concerns, and foster a sense of
                belonging among crypto enthusiasts.
              </p>
            </div>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
