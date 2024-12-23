import { FaRegArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { category_name, category_image, availability, description } = category;
  return (
    <div className="card h-full flex flex-col shadow-violet-200 justify-between bg-gray-100 bg-opacity-20 shadow-xl border-t-2 border-violet-500">
      <div className="flex justify-center items-center bg-gray-200 bg-opacity-45 m-4 rounded-2xl">
        <Link to={`/books/${category_name}`}>
          <img
            className="h-[300px] object-contain hover:transition duration-300 ease-in hover:duration-700 hover:ease-in-out -skew-y-3 scale-90 hover:skew-y-0 hover:scale-100 translate-x-4 pr-5 py-2 rounded-2xl"
            src={category_image}
            alt="category_image"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-grow px-5 py-3 space-y-3">
        <div className="flex justify-between flex-wrap items-center">
          <h2 className="text-2xl font-semibold pb-2">{category_name}</h2>
          <div className="badge bg-blue-200 bg-opacity-50 text-blue-500 rounded-2xl font-semibold font-mono px-2 py-2">
            {availability}
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="px-5 pb-4 flex justify-between items-center">
        <FaRegHeart className="text-xl text-red-400"></FaRegHeart>
        <Link to={`/books/${category_name}`}>
          <FaRegArrowAltCircleRight className="transition ease-in delay-150 hover:translate-x-1 hover:scale-110 duration-300 text-2xl text-blue-500"></FaRegArrowAltCircleRight>
        </Link>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
