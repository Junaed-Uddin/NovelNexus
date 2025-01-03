import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { ImSpinner2, ImSpinner9 } from "react-icons/im";

const Profile = () => {
  const { user, userUpdateProfile } = useContext(AuthContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  // profile update handler
  const handleProfile = (e) => {
    e.preventDefault();
    setLoader(true);
    const updateName = e.target.name.value;
    const updatePhotoURL = e.target.photoURL.value;

    // update profile
    userUpdateProfile({
      displayName: updateName,
      photoURL: updatePhotoURL,
    })
      .then(() => {
        toast.success("Profile Updated");
        setSuccessMsg("Profile updated");
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoader(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl shadow-violet-200 bg-gray-50 text-gray-800">
        <form onSubmit={handleProfile} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Full Name
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-blue-300 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              readOnly
              defaultValue={user?.email}
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-blue-300 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-gray-600">
              Photo URL
            </label>
            <input
              defaultValue={user?.photoURL}
              type="photoURL"
              name="photoURL"
              placeholder="photoURL"
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-blue-300 text-gray-800"
            />
          </div>
          <button className="flex justify-center rounded-lg items-center w-full py-2.5 text-center text-white bg-violet-600">
            {loader ? (
              <ImSpinner2 className="animate-spin text-xl"></ImSpinner2>
            ) : (
              <span>Update</span>
            )}
          </button>
        </form>
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

export default Profile;
