import PropTypes from "prop-types";
import { IoMdStarOutline, IoIosRocket } from "react-icons/io";
import { GiLovers, GiMaterialsScience, GiDrippingKnife } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    bestSeller,
  } = book;

  return (
    <div>
      <div className="card h-full shadow-blue-100 flex flex-col mt-7 justify-between bg-base-100 shadow-xl border-t-4 border-blue-500">
        <div className="bg-gray-200 bg-opacity-45 rounded-2xl m-4">
          <Link to={`/books/${category}/bookDetails/${bookId}`}>
            <img
              className="w-full h-[250px] object-contain hover:transition duration-300 ease-in hover:duration-700 hover:ease-in-out -skew-y-3 scale-95 hover:skew-y-0 hover:scale-110 translate-x-4 p-4 rounded-2xl"
              src={image}
              alt="book_image"
            />
          </Link>
        </div>
        <div className="flex justify-start flex-wrap px-3 py-3 items-center sm:space-x-2">
          {tags.map((tag, idx) => (
            <p
              className="badge bg-blue-200 flex-grow bg-opacity-40 text-blue-500 mx-1 mb-2 font-semibold border-none"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex flex-col flex-grow px-5 space-y-3">
          <div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <h2 className="text-md font-semibold text-gray-500">
              By: {author}
            </h2>
          </div>
          <div className="badge bg-green-200 bg-opacity-50 text-green-500 rounded-2xl font-semibold font-mono px-2 py-2">
            {bestSeller ? <p>Best Seller</p> : <p>Recommended</p>}
          </div>
        </div>

        <div className="flex flex-col flex-grow px-5 divide-y-2 divide-dashed">
          <p className={`mb-1 flex flex-col flex-grow`}>
            {review.length > 70 ? review.slice(0, 150) + "..." : review}
          </p>
          {/* card icons  */}
          <div className="flex justify-between items-center pt-3 pb-5">
            <div className="flex items-center space-x-2">
              <IoMdStarOutline className="text-xl text-red-400"></IoMdStarOutline>
              <span>{rating}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col flex-grow">
                {category === "Romance" ? (
                  <GiLovers className="text-xl text-red-400"></GiLovers>
                ) : category === "Fiction" ? (
                  <IoIosRocket className="text-xl text-blue-400"></IoIosRocket>
                ) : category === "Science Fiction" ? (
                  <GiMaterialsScience className="text-xl text-blue-400"></GiMaterialsScience>
                ) : category === "Fantasy" ? (
                  <FaFantasyFlightGames className="text-xl text-blue-400"></FaFantasyFlightGames>
                ) : category === "Non-fiction" ? (
                  <SlChemistry className="text-xl text-green-400"></SlChemistry>
                ) : category === "Mystery & Thriller" ? (
                  <GiDrippingKnife className="text-xl text-red-400"></GiDrippingKnife>
                ) : (
                  ""
                )}
              </div>
              <p>{category}</p>
            </div>
            <Link to={`/books/${category}/bookDetails/${bookId}`}>
              <button className="btn btn-outline btn-sm">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
