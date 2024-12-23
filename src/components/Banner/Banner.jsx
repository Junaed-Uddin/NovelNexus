import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import banner1 from "../../../image/banners/banner1.jpg";
import banner2 from "../../../image/banners/banner2.jpg";
import banner3 from "../../../image/banners/banner3.jpg";
import banner7 from "../../../image/banners/banner7.jpeg";
import banner8 from "../../../image/banners/banner8.jpg";
import banner9 from "../../../image/banners/banner9.jpg";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider animation="cubeAnimation" className="min-h-full md:h-[570px]">
        <div data-src={banner2}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">
              Discover Stories That Inspire You
            </h1>
            <p className="mt-2 px-3">
              Dive into the world of books and uncover tales of adventure, love,
              and mystery that will stay with you forever.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get started
            </button>
          </div>
        </div>
        <div data-src={banner3}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">Explore the Magic of Fiction</h1>
            <p className="mt-2 px-3">
              Let your imagination soar with captivating narratives and
              unforgettable characters from the best authors worldwide.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
        <div data-src={banner1}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">
              Bestselling Books Across All Genres
            </h1>
            <p className="mt-2 px-3">
              From thrillers to romance, find your next favorite read among
              today’s most talked-about books.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
        <div data-src={banner7}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">
              Rediscover Classics You’ll Love
            </h1>
            <p className="mt-2 px-3">
              Revisit timeless literary masterpieces that continue to inspire
              readers across generations.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
        <div data-src={banner8}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">
              Lose Yourself in a Great Story
            </h1>
            <p className="mt-2 px-3">
              Whether it’s an epic fantasy or a heartwarming romance, find books
              that transport you to new worlds.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get started
            </button>
          </div>
        </div>
        <div data-src={banner9}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-xl sm:text-4xl font-bold">
              Books That Challenge Your Mind
            </h1>
            <p className="mt-2 px-3">
              Explore thought-provoking works that inspire deep reflection and a
              new perspective on life.
            </p>
            <button className="mt-4 btn btn-sm sm:btn-md border-none text-white px-2 sm:px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Get started
            </button>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
