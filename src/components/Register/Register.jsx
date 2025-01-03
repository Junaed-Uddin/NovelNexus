import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaXmark } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { IoIosCheckmarkCircleOutline, IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import { ImSpinner2 } from "react-icons/im";

const Register = () => {
  // AuthContext
  const {
    signUpUsers,
    userUpdateProfile,
    verificationEmail,
    googleSignIn,
    githubSignIn,
  } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loader, setLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // email handler
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // password handler
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // email validation
    if (!email) {
      setEmailError("");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Please provide a valid email");
      return;
    } else {
      setEmailError("");
    }

    // password validation
    if (!password) {
      setPasswordError("");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password length should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password contains at least one Uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password contains at least one Lowercase");
      return;
    } else if (!/\d/.test(password)) {
      setPasswordError("Password contains at least one digit");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password contains at least one special character");
      return;
    } else {
      setPasswordError("");
    }
  }, [email, password]);

  // google sign in
  const googleSignInHandler = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Registration successfully", {
          position: "top-right",
          autoClose: 1500,
          closeOnClick: true,
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  // github sign in
  const githubSignInHandler = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Registration successfully");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    setLoader(true);

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    setPasswordError("");
    setEmailError("");
    setErrorMsg("");
    setSuccessMsg("");

    // create user
    signUpUsers(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessMsg("User created Successfully");

        // update profile
        userUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            // profile updated..!!
          })
          .catch((error) => {
            console.error(error.message);
          });

        // verification mail
        verificationEmail().then(() => {
          toast.success("Email verification has sent..!!");
          setLoader(false);
        });

        // redirect home page
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error(error.message);
        setLoader(false);
        toast.error(error.message);
        setErrorMsg("Email already in-use");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center my-8 w-full px-3 sm:px-0">
      <h1 className="text-2xl font-bold text-center mb-6">Registration</h1>
      <div className="w-full max-w-md px-4 sm:px-8 shadow-violet-200 border-t-2 border-violet-500 py-8 space-y-1 rounded-xl shadow-xl text-gray-800">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-black">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center items-center sm:space-x-4">
            {/* email  */}
            <div className="space-y-1 w-full text-sm">
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                onChange={handleEmail}
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
              />
              {/* email error show  */}
              <div>
                {emailError && (
                  <div>
                    <p className="text-sm text-red-500">{emailError}</p>
                  </div>
                )}
              </div>
            </div>
            {/* photoURL  */}
            <div className="space-y-1 w-full text-sm">
              <label htmlFor="photo" className="block text-black">
                Photo URL
              </label>
              <input
                required
                type="text"
                name="photo"
                placeholder="https://example/user/photo.."
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-gray-800"
              />
            </div>
          </div>
          {/* password  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <div className="relative">
              <input
                onChange={handlePassword}
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
            {/* password error show  */}
            <div>
              {passwordError && (
                <div>
                  <p className="text-sm text-red-500">{passwordError}</p>
                </div>
              )}
            </div>
          </div>
          <button className="flex justify-center items-center w-full py-2.5 text-center rounded-lg text-white bg-violet-600">
            {loader ? (
              <ImSpinner2 className="animate-spin text-xl"></ImSpinner2>
            ) : (
              <span>Registration</span>
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
          <button
            onClick={googleSignInHandler}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-[30px]"></FcGoogle>
          </button>
          {/* github  */}
          <button
            onClick={githubSignInHandler}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <FaGithub className="text-[30px]"></FaGithub>
          </button>
        </div>
        {/* already have an account  */}
        <div className="flex justify-center items-center pb-3">
          <p className="text-xs text-center sm:px-1 text-black">
            {`Already have an account?`}
          </p>
          <Link to={`/login`} className="underline text-gray-800 text-xs">
            Login
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

export default Register;
