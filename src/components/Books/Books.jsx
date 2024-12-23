import { useLoaderData, useParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Book from "../Book/Book";
import { useEffect, useState } from "react";

const Books = () => {
  const { category_name } = useParams();

  const books = useLoaderData();
  const bookSortByCategory = books?.books?.filter(
    (cat) => cat.category === category_name
  );
  const [showDisplay, setDisplayAll] = useState(
    bookSortByCategory?.slice(0, 5)
  );
  const [btnDisable, setBtnDisable] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setBtnDisable(true);
      setDisplayAll(bookSortByCategory?.slice(0, 5));
    }
  }, [search]);

  if (!bookSortByCategory) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px]">
        <p className="text-red-500 font-semibold text-3xl">Books Not Found</p>
      </div>
    );
  }

  const searchHandler = (e) => {
    setBtnDisable(false);
    const searchResult = bookSortByCategory?.filter((book) =>
      book.bookName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayAll(searchResult);
    setSearch(e.target.value);
    if (!searchResult.length) {
      setDisplayAll(bookSortByCategory?.slice(0, 0));
    }
  };

  return (
    <div className="mt-20 max-w-6xl mx-auto divide-y-2 divide-blue-200 divide-dashed sm:px-4 md:px-0">
      <div className="flex justify-between items-center pb-7">
        <h2 className="text-3xl text-blue-400 font-semibold text-start">
          {category_name}: {showDisplay?.length}
        </h2>
        <div className="flex relative justify-center items-center">
          <IoSearchOutline className="absolute top-[18px] left-3"></IoSearchOutline>
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Search"
            className="input pl-10 input-primary focus:border-none w-full max-w-xs"
          />
        </div>
      </div>
      {showDisplay?.length ? (
        <div className="grid grid-cols-1 pb-5 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {showDisplay?.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      ) : (
        <p className="text-red-500 font-semibold flex flex-col justify-center items-center min-h-[400px] text-3xl">
          No Data Found
        </p>
      )}
      {btnDisable && (
        <div
          className={`flex justify-center items-center mt-10 ${
            bookSortByCategory?.length === showDisplay?.length ? "hidden" : ""
          }`}
        >
          <button
            onClick={() => setDisplayAll(bookSortByCategory?.slice(0))}
            className="btn mt-5 mb-10 bg-violet-500 text-white hover:bg-black"
          >
            Show All
            <FaArrowRightToBracket className="text-lg"></FaArrowRightToBracket>
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;