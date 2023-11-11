import Testiomonal from "../../Data/Testimonals";
import ReviewsCard from "./ReviewsCard";
const Reviews = () => {
  return (
    <section id="reviews" className="pt-10 mt-10">
      <h2 className="text-3xl text-center text-white font-[mona-sans]">
        What Our Users says about us?
      </h2>
      <div className="block md:flex gap-6 flex-col p-4">
        {Testiomonal.map((review) => (
          <ReviewsCard review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
