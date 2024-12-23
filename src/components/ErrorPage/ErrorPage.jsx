import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <h2 className="text-6xl text-center text-red-500">Opps!!</h2>
      <p className="text-3xl text-white">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-3xl text-red-500 font-semibold">
        <i>
          {error.status}, {error.statusText}
        </i>
      </p>
      <Link to={"/"}>
        <button className="btn btn-success text-white mt-5 uppercase">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
