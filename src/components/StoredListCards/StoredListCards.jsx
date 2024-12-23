import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { GiNewspaper } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { RiUserStarLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";

const StoredListCards = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 border-2">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex justify-center items-center ml-5 mr-5 md:mr-0 pr-8 my-5 rounded-2xl bg-gray-200 bg-opacity-30">
          <img
            src={image}
            className="h-[270px] md:w-full rounded-l-2xl object-contain hover:transition duration-300 ease-in hover:duration-700 hover:ease-in-out -skew-y-3 scale-75 hover:skew-y-0 hover:scale-90 translate-x-4"
            alt="book-image"
          />
        </div>
        <div className="px-5 xs:px-8 py-3 md:py-8 md:w-3/4 flex flex-col justify-start divide-y divide-gray-300 divide-solid">
          {/* create below div for divide style  */}
          <div className="mb-4">
            {/* book name and author  */}
            <div>
              <h2 className="text-2xl font-bold">{bookName}</h2>
              <p className="mt-4">
                <span className="font-bold">Author:</span> {author}
              </p>
            </div>
            {/* tags and publishing year  */}
            <div className="flex justify-between w-full flex-wrap items-center mt-4 md:space-x-0">
              <div className="flex space-y-2 sm:space-y-0 justify-center sm:justify-start items-center flex-wrap mb-4 space-x-3">
                <p className="font-bold">Tags:</p>
                {tags.map((tag, idx) => (
                  <p
                    className="badge flex-grow bg-blue-300 py-3 bg-opacity-15 text-blue-500"
                    key={idx}
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <div className="flex items-center xs:mb-4 space-x-2">
                <IoLocationOutline className="flex-grow "></IoLocationOutline>
                <p className="flex-grow">
                  Year of Publishing: <span>{yearOfPublishing}</span>
                </p>
              </div>
            </div>

            {/* publisher and pages  */}
            <div className="flex mt-3 xs:mt-0 flex-wrap items-center md:mt-0 sm:space-x-6">
              <div className="flex flex-grow mb-3 sm:flex-grow-0 items-center space-x-2 mr-4">
                <GrGroup></GrGroup>
                <p className="text-gray-500">
                  <span className="font-semibold ">Publisher:</span> {publisher}
                </p>
              </div>
              <div className="flex flex-grow mb-3 sm:flex-grow-0 items-center space-x-2">
                <GiNewspaper></GiNewspaper>
                <p className="text-gray-500">
                  <span className="font-semibold ">Pages:</span> {totalPages}
                </p>
              </div>
            </div>
          </div>
          {/* button groups  */}
          <div className="flex flex-wrap space-y-2 sm:space-y-0 w-full font-semibold items-center justify-start space-x-2 sm:space-x-3 pt-5">
            <span className="badge w-full xs:w-[180px] flex-grow p-5 bg-blue-300 text-blue-500 rounded-[20px] bg-opacity-20">
              <BiCategory className="text-[20px] mt-0.5 pr-1"></BiCategory>
              Category: {category}
            </span>
            <span className="badge flex-grow w-full xs:w-[140px] bg-amber-300 text-amber-500 p-5 rounded-[20px] bg-opacity-20">
              <RiUserStarLine className="text-[20px] mt-0.5 pr-1"></RiUserStarLine>
              Rating: {rating}
            </span>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-sm flex-grow w-full xs:w-[150px] bg-blue-500 h-10 hover:bg-black rounded-[20px] text-white"
            >
              <CiBoxList className="text-[18px] mt-0.5"></CiBoxList>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

StoredListCards.propTypes = {
  book: PropTypes.object.isRequired,
};

export default StoredListCards;
