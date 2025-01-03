import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import ReadPages from "../components/ReadPages/ReadPages";
import MyLibrary from "../components/MyLibrary/MyLibrary";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Books from "../components/Books/Books";
import BookDetails from "../components/BookDetails/BookDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

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
        loader: () => fetch("/books.json"),
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
        path: "/registration",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
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


export default router;