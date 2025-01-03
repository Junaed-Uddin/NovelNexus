import { useContext, useRef, useState } from "react";
import { FaGithub, FaXmark } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import {
  IoIosCheckmarkCircleOutline,
  IoMdEye,
  IoMdEyeOff,
} from "react-icons/io";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { ImSpinner2 } from "react-icons/im";

const Login = () => {
  const { loginUser, passwordReset, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState("");
  const emailRef = useRef("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // login handler
  const handleSignIn = (e) => {
    e.preventDefault();
    setLoader(true);
    const email = emailRef.current.value;
    const password = e.target.password.value;

    // reset error & success message
    setErrorMsg("");
    setSuccessMsg("");

    // login
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful");
        setSuccessMsg("Login Successful");
        setLoader(false);
        // page redirect to the login page
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
        setErrorMsg(error.message);
        setLoader(false);
      });

    // input reset
    emailRef.current.value = "";
    e.target.password.value = "";
  };

  // handle forgot password
  const handleForgotPassword = () => {
    const currentEmail = emailRef.current.value;

    // forgot password
    passwordReset(currentEmail)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  // google sign in handler
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully login");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  // github sign in handler
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center  my-8 w-full px-3 sm:px-0">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <div className="w-full max-w-md px-4 sm:px-8 shadow-violet-200 border-t-2 border-violet-500 py-8 space-y-1 rounded-xl shadow-xl text-gray-800">
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              ref={emailRef}
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
            <div className="relative">
              <input
                required
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
              />
              <span
                className="text-xl absolute top-2.5 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
              </span>
            </div>
            <div className="flex justify-end text-xs text-black">
              <Link onClick={handleForgotPassword}>Forgot Password?</Link>
            </div>
          </div>
          <button className="flex justify-center items-center w-full py-2.5 text-center rounded-lg text-white bg-violet-600">
            {loader ? (
              <ImSpinner2 className="animate-spin text-2xl"></ImSpinner2>
            ) : (
              <span>Sign in</span>
            )}
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
            <FcGoogle
              onClick={handleGoogleSignIn}
              className="text-[30px]"
            ></FcGoogle>
          </button>
          {/* github  */}
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub
              onClick={handleGithubSignIn}
              className="text-[30px]"
            ></FaGithub>
          </button>
        </div>
        {/* Don't have an account  */}
        <div className="flex justify-center items-center pb-3">
          <p className="text-xs text-center sm:px-1 text-black">
            {`Don't have an account?`}
          </p>
          <Link
            to={`/registration`}
            className="underline text-gray-800 text-xs"
          >
            Create an account
          </Link>
        </div>
        {/* error / success message show  */}
        {loader ? (
          <ImSpinner9 className="animate-spin"></ImSpinner9>
        ) : (
          <div>
            {errorMsg && (
              <div className="flex justify-start items-center space-x-1">
                <FaXmark className="text-red-500 mt-0.5"></FaXmark>
                <p className="text-sm text-red-500">{errorMsg}</p>
              </div>
            )}
            {successMsg && (
              <div className="flex justify-start items-center space-x-1">
                <IoIosCheckmarkCircleOutline className="text-green-500 mt-0.5"></IoIosCheckmarkCircleOutline>
                <p className="text-sm text-green-500">{successMsg}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
