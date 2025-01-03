import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center  my-8 w-full px-3 sm:px-0">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <div className="w-full max-w-md px-4 sm:px-8 shadow-violet-200 border-t-2 border-violet-500 py-8 space-y-1 rounded-xl shadow-xl text-gray-800">
        <form className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
            />
            <div className="flex justify-end text-xs text-black">
              <Link href="#">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full py-2.5 text-center rounded-lg text-gray-50 bg-violet-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-2 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-black">OR</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {/* google  */}
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle className="text-[30px]"></FcGoogle>
          </button>
          {/* github  */}
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub className="text-[30px]"></FaGithub>
          </button>
        </div>
        {/* Don't have an account  */}
        <div className="flex justify-center items-center">
          <p className="text-xs text-center sm:px-1 text-black">
            {`Don't have an account?`}
          </p>
          <Link to={`/registration`} className="underline text-gray-800 text-xs">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
