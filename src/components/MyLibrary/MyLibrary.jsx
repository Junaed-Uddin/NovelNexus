import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utils/localStorage";
import StoredListCards from "../StoredListCards/StoredListCards";
import { useEffect, useState } from "react";
import "./MyLibrary.css";
import { FaBookReader } from "react-icons/fa";
import { MdPlaylistAddCheck } from "react-icons/md";

const MyLibrary = () => {
  const data = useLoaderData();
  const [readingDisplay, setReadingDisplay] = useState([]);
  const [wishlistDisplay, setWishlistDisplay] = useState([]);
  const [activeTab, setActiveTab] = useState("reading");

  useEffect(() => {
    const storedReadList = getDataFromLocalStorage("readList");
    const storedWishList = getDataFromLocalStorage("wishList");
    const readBookList = data.books.filter((book) =>
      storedReadList.includes(book.bookId)
    );
    setReadingDisplay(readBookList);
    const wishBookList = data.books.filter((book) =>
      storedWishList.includes(book.bookId)
    );
    setWishlistDisplay(wishBookList);
  }, [data.books]);

  // sort handler
  const sortHandler = (filter) => {
    if (activeTab === "reading") {
      const sortedReadingBooks = [...readingDisplay].sort((a, b) => {
        if (filter === "rating") return b.rating - a.rating;
        if (filter === "pages") return b.totalPages - a.totalPages;
        if (filter === "publishedYear")
          return b.yearOfPublishing - a.yearOfPublishing;
      });
      setReadingDisplay(sortedReadingBooks);
    } else if (activeTab === "wishlist") {
      const sortedWishlistBooks = [...wishlistDisplay].sort((a, b) => {
        if (filter === "rating") return b.rating - a.rating;
        if (filter === "pages") return b.totalPages - a.totalPages;
        if (filter === "publishedYear")
          return b.yearOfPublishing - a.yearOfPublishing;
      });
      setWishlistDisplay(sortedWishlistBooks);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 mb-32 px-3 lg:px-0">
      <div className="flex flex-wrap justify-center space-y-3 xs:space-y-0 xs:justify-between items-center rounded-2xl p-4 font-semibold text-blue-500 bg-gray-200 bg-opacity-30 mb-10">
        <h2 className="text-xl sm:text-3xl">My Library</h2>
        {/* drop-down button  */}
        <div className="join">
          <select
            defaultValue={"default"}
            onClick={(e) => sortHandler(e.target.value)}
            className="select join-item"
          >
            <option className="text-black" value={"default"} disabled>
              Filter
            </option>
            <option className="text-black" value="rating">
              Rating
            </option>
            <option className="text-black" value="pages">
              Total Pages
            </option>
            <option className="text-black" value="publishedYear">
              Published Year
            </option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge bg-blue-500 text-white">
              {activeTab === "reading"
                ? readingDisplay.length
                : wishlistDisplay.length}
            </span>
            <button className="btn h-12 btn-xs sm:btn-md join-item">
              {activeTab === "reading" ? (
                <span>Read Books</span>
              ) : (
                <span>Wishlist Books</span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* tab panel code  */}
      <div>
        <div className="flex tab-buttons justify-start items-center">
          <button
            className={`tab-button  ${
              activeTab === "reading" ? "active" : ""
            } btn btn-xs px-4 sm:px-5 h-9  sm:h-11 sm:btn-sm`}
            onClick={() => setActiveTab("reading")}
          >
            Read Books
            <FaBookReader></FaBookReader>
          </button>
          <button
            className={`tab-button ${
              activeTab === "wishlist" ? "active" : ""
            } btn btn-xs px-4 sm:px-5 h-9 sm:btn-sm sm:h-11`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist Books
            <MdPlaylistAddCheck className="text-[20px]"></MdPlaylistAddCheck>
          </button>
        </div>

        {/* read book  */}
        <div className="tab-panels">
          {activeTab === "reading" && readingDisplay.length ? (
            <div className="space-y-5">
              {readingDisplay.map((book) => (
                <StoredListCards
                  key={book.bookId}
                  book={book}
                ></StoredListCards>
              ))}
            </div>
          ) : (
            <p
              className={`text-center text-3xl text-red-500 ${
                activeTab === "wishlist" ? "hidden" : ""
              }`}
            >
              No reading data has found..!!
            </p>
          )}

          {/* Wishlist Books */}
          {activeTab === "wishlist" && wishlistDisplay.length ? (
            <div className="space-y-5">
              {wishlistDisplay.map((book) => (
                <StoredListCards
                  key={book.bookId}
                  book={book}
                ></StoredListCards>
              ))}
            </div>
          ) : (
            <p
              className={`text-center text-3xl text-red-500 ${
                activeTab === "reading" ? "hidden" : ""
              }`}
            >
              No reading data has found..!!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
