import { useLoaderData, useParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Book from "../Book/Book";
import { useEffect, useMemo, useState } from "react";

const Books = () => {
  const { category_name } = useParams();

  const books = useLoaderData();
  // const bookSortByCategory = books?.books?.filter(
  //   (cat) => cat.category === category_name
  // );
  const bookSortByCategory = useMemo(() => {
    return books?.books?.filter((cat) => cat.category === category_name);
  }, [books, category_name]);

  const [showDisplay, setShowDisplayAll] = useState(
    bookSortByCategory?.slice(0, 5)
  );
  const [btnEnable, setBtnEnable] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setBtnEnable(true);
      setShowDisplayAll(bookSortByCategory?.slice(0, 5));
    }
  }, [search, bookSortByCategory]);

  if (!bookSortByCategory) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px]">
        <p className="text-red-500 font-semibold text-3xl">Books Not Found</p>
      </div>
    );
  }

  const searchHandler = (e) => {
    setBtnEnable(false);
    const searchResult = bookSortByCategory?.filter((book) =>
      book.bookName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setShowDisplayAll(searchResult);
    setSearch(e.target.value);
    if (!searchResult.length) {
      setShowDisplayAll(bookSortByCategory?.slice(0, 0));
    }
  };

  const handShowAll = () => {
    setShowDisplayAll(bookSortByCategory);
  };

  return (
    <div className="mt-20 max-w-6xl mx-auto mb-20 divide-y-2 divide-blue-200 divide-dashed px-4 xl:px-0">
      <div className="flex flex-col xs:flex-row space-y-4 xs:space-y-0 justify-between items-center pb-7">
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
        <div className="grid grid-cols-1 pb-5 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {showDisplay?.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      ) : (
        <p className="text-red-500 font-semibold flex flex-col justify-center items-center min-h-[400px] text-3xl">
          No Data Found
        </p>
      )}
      {btnEnable && (
        <div
          className={`flex justify-center items-center mt-10 ${
            bookSortByCategory?.length === showDisplay?.length ? "hidden" : ""
          }`}
        >
          <button
            onClick={handShowAll}
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
