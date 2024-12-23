import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ReadPages from "./components/ReadPages/ReadPages";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import Books from "./components/Books/Books";
import BookDetails from "./components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/visualization",
        loader: ()=> fetch('/books.json'),
        element: <ReadPages></ReadPages>,
      },
      {
        path: "/my_library",
        loader: () => fetch("/books.json"),
        element: <MyLibrary></MyLibrary>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/books/:category_name",
        loader: () => fetch("/books.json"),
        element: <Books></Books>,
      },
      {
        path: "/books/:category_name/bookDetails/:bookId",
        loader: () => fetch("/books.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
