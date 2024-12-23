import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  getDataFromLocalStorage,
  saveIdByLocalStorage,
} from "../../utils/localStorage";
import { FaBookReader } from "react-icons/fa";
import { MdFormatListBulletedAdd, MdArrowBackIosNew } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const bookData = useLoaderData();
  const bookDetails = bookData.books.find((book) => book.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bestSeller,
  } = bookDetails;

  //   read book handler
  const readBookHandler = (e) => {
    e.preventDefault();
    const storedReadBookId = getDataFromLocalStorage("readList");
    if (!storedReadBookId.includes(bookId)) {
      saveIdByLocalStorage(bookId, "readList");
      toast("Book has added to the Book list");
    } else {
      return toast.warn("Book has already added to the Book list!!");
    }
  };

  //   wishlist handler
  const wishListHandler = (e) => {
    e.preventDefault();
    const storedWishListId = getDataFromLocalStorage("wishList");
    const storedReadBookId = getDataFromLocalStorage("readList");
    if (
      !storedWishListId.includes(bookId) &&
      !storedReadBookId.includes(bookId)
    ) {
      saveIdByLocalStorage(bookId, "wishList");
      return toast("Book has added to the Wishlist");
    } else if (storedReadBookId.includes(bookId)) {
      return toast.warn("Book has already been added to the Book List");
    }
    return toast.warn("Book has already been added to the Wishlist");
  };

  return (
    <div className="max-w-[1100px] mx-auto my-20">
      <div className="card bg-base-100">
        <div className="lg:flex space-x-2 sm:space-x-4">
          <div className="lg:w-1/2 bg-gray-200 rounded-3xl bg-opacity-30 flex flex-col justify-center items-center">
            <div>
              <img
                className="pr-7 rounded-l-2xl lg:h-[700px] object-contain hover:transition duration-300 ease-in hover:duration-700 hover:ease-in-out -skew-y-6 scale-75 hover:skew-y-0 hover:scale-90 translate-x-4"
                src={image}
                alt="book-image"
              />
            </div>
          </div>
          <div className="lg:w-1/2 px-2 xs:px-4 sm:px-8 divide-y divide-dashed">
            <div className="mt-6 lg:mt-0">
              <h2 className="text-4xl font-bold">{bookName}</h2>
              <p className="my-4">
                By: <span className="font-semibold">{author}</span>
              </p>
            </div>
            <div className="pt-4 pb-2 flex justify-between items-center">
              <p>
                <span className="font-bold">Category: </span>
                <span className="font-mono">{category}</span>
              </p>
              <div className="badge bg-blue-300 bg-opacity-50 rounded-2xl font-semibold font-mono">
                {bestSeller ? <p>Best Seller</p> : <p>Recommended</p>}
              </div>
            </div>
            <div>
              <p className="mt-5">
                <span className="font-bold">Review:</span> {review}
              </p>
              <div className="flex justify-start flex-wrap py-5 items-center sm:space-x-2">
                {tags.map((tag, idx) => (
                  <span
                    className="badge font-mono font-semibold text-violet-500 bg-opacity-30 mx-1 sm:mx-0 my-1.5 sm:my-0 border-none bg-violet-200"
                    key={idx}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            {/* bottom part  */}

            <div className="flex flex-col justify-center space-y-3 pt-3 mb-4">
              <p>
                <span className="font-bold">Number of Pages:</span> {totalPages}
              </p>
              <p>
                <span className="font-bold">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-bold">Year of Publishing:</span>{" "}
                {yearOfPublishing}
              </p>
              <p>
                <span className="font-bold">Rating:</span> {rating}
              </p>
            </div>
            {/* button part  */}
            <div className="pt-5 flex flex-col space-y-3 xs:space-y-0 xs:flex-row justify-between xs:items-center">
              <div className="flex flex-col xs:flex-row xs:space-x-4 space-y-3 xs:space-y-0">
                <Link onClick={readBookHandler}>
                  <button className="btn w-full xs:w-[90px] bg-violet-500 hover:bg-blue-500 font-bold text-white btn-sm h-11">
                    Read <FaBookReader className="text-[15px]"></FaBookReader>
                  </button>
                </Link>
                <Link onClick={wishListHandler}>
                  <button className="btn w-full xs:w-[110px] btn-outline btn-neutral btn-sm h-11 font-bold">
                    Wishlist <MdFormatListBulletedAdd className="text-[20px]"></MdFormatListBulletedAdd>
                  </button>
                </Link>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="btn flex items-center justify-center w-full xs:w-[90px] bg-red-500 hover:bg-black text-white btn-sm h-11 font-bold"
              >
              <MdArrowBackIosNew className="text-[14px] mt-0.5"></MdArrowBackIosNew>
              <span>Back</span> 
              </button>
            </div>
          </div>
          {/* toast container  */}
          <ToastContainer autoClose={1500}></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
