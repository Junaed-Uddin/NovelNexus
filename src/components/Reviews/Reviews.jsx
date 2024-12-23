import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "./Reviews.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import u1 from "../../../image/users/u1.jpg";
import u2 from "../../../image/users/u2.jpg";
import u3 from "../../../image/users/u3.jpg";
import u4 from "../../../image/users/u4.jpg";
import u5 from "../../../image/users/u5.jpg";

const Reviews = () => {
  const bookReviews = [
    {
      userName: "Emily Watson",
      review:
        "This book is a masterpiece! The author has a way of making characters come alive, and I felt deeply connected to their journeys. The plot was unpredictable and kept me hooked till the last page. It’s been a while since I read something so gripping and emotional. I would highly recommend this book to anyone who loves a well-crafted story. Can’t wait to explore more works from this author!",
      reviewed: "2 days ago",
      rating: "⭐⭐⭐⭐⭐",
      userImg: u1,
    },
    {
      userName: "Michael Rodriguez",
      review:
        "While the premise of this book is intriguing, I found the pacing to be a bit slow. The first half felt overly descriptive, and it took a while for the story to pick up. That said, the second half was much better, with some truly memorable twists. If you have the patience for a slow build, this book might be for you. Overall, an average read with some redeeming qualities.",
      reviewed: "5 days ago",
      rating: "⭐⭐⭐",
      userImg: u2,
    },
    {
      userName: "Olivia Bennett",
      review:
        "What an incredible read! This book transported me to another world with its vivid descriptions and captivating storytelling. The protagonist’s journey was inspiring, and the themes of love, loss, and hope were beautifully woven into the narrative. I couldn’t put it down and finished it in one sitting! Highly recommended for fans of fantasy and epic adventures.",
      reviewed: "1 day ago",
      rating: "⭐⭐⭐⭐⭐",
      userImg: u3,
    },
    {
      userName: "David Johnson",
      review:
        "I had high expectations for this book, but it left me feeling underwhelmed. The plot felt predictable, and the characters didn’t have much depth. I kept waiting for something exciting to happen, but it never did. The writing style was decent, but it couldn’t make up for the lackluster story. It’s not a bad book, but I wouldn’t go out of my way to recommend it.",
      reviewed: "3 days ago",
      rating: "⭐⭐",
      userImg: u4,
    },
    {
      userName: "Sophia Lee",
      review:
        "This book surprised me in the best way possible! I wasn’t expecting much, but the story drew me in from the first chapter. The author’s unique writing style and witty dialogue made it a joy to read. The characters were so relatable, and I found myself rooting for them. It’s a light, feel-good book that I would definitely recommend for a weekend read!",
      reviewed: "4 days ago",
      rating: "⭐⭐⭐⭐",
      userImg: u5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-20">
      <div>
        <h2 className="text-3xl text-center font-semibold mb-6 sm:mb-14">
          Reader Review
        </h2>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        style={{ paddingTop: "20px" }}
      >
        {bookReviews.map((bookReview, idx) => (
          <SwiperSlide key={idx}>
            <div className="divide-y rounded-md min-h-full xs:min-h-[280px] shadow-2xl border-t-2 border-violet-500 divide-gray-300">
              <div className="flex flex-col space-y-2 xs:space-y-0 xs:flex-row justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={bookReview.userImg}
                    alt="user-images"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{bookReview.userName}</h4>
                    <span className="text-xs text-gray-600">
                      {bookReview.reviewed}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-700">
                  <span className="text-xl font-bold">{bookReview.rating}</span>
                </div>
              </div>
              <div className="p-4 text-sm text-gray-600">
                <p className="relative">{`"${bookReview.review}"`}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
