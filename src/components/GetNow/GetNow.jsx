import { motion } from "framer-motion";
const GetNow = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5, x: 400 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section id="getnow">
      <div className="text-white  font-[mona-sans] max-w-[1000px] mx-auto">
        <div className="p-6 mt-7">
          <h2 className="text-xl md:text-4xl font-semibold">Get Now</h2>
          <p className="text-sm md:text-2xl">
            you can download Coindrance anywhere across the web,
            <br /> It's now Available in the Play and App Store
          </p>
        </div>
        <div className="flex items-center gap-2 justify-center md:gap-3">
          <motion.button
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 p-2 md:p-4 bg-[#2f80ed] shadow-lg hover:scale-110 transition-all">
            <img src="/andriod.svg" alt="" />
            <p>Download Now</p>
          </motion.button>
          <motion.button
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 p-2 md:p-4 bg-[#2f80ed] shadow-lg  hover:scale-110 transition-all">
            <img src="/apple.svg" alt="" />
            <p>Download Now</p>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GetNow;
