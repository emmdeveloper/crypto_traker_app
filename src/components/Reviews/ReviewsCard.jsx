import { motion } from "framer-motion";
const ReviewsCard = ({ review }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="block md:max-w-[1000px] mx-auto flex  items-center gap-3 bg-[#3485c748] font-[mona-sans] text-white p-6 rounded-md shadow-lg">
      <div className="max-w-[170px] flex flex-col items-center gap-2">
        <img
          src={review.img}
          alt="user_image"
          className="w-full rounded-full"
        />
        <p>{review.userName}</p>
      </div>
      <div className="max-w-[840px]">
        <h1 className="text-xl md:text-2xl">{review.title}</h1>
        <p className="text-xs md:text-lg">{review.comments}</p>
      </div>
    </motion.div>
  );
};

export default ReviewsCard;
