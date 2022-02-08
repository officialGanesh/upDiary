import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase-config";

function UserAuth({ setIsAuth }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, provider)
        .then((res) => {
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="my-[24rem] ml-12 sm:flex sm:flex-col  lg:block">
        <div className="text-white text-6xl  font-semibold mb-10 my-[10rem]">
          Be creative. <br /> Write something.
        </div>
        <div className="p-4 max-w-3xl  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* sign in with google */}
          <button
            className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-6 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-700 hover:cursor-pointer"
            onClick={signInWithGoogle}
          >
            {" "}
            Login with Google
          </button>
        </div>
        <div className="lg:float-right inline sm:float-none   -mt-[41rem] mr-12 ">
          <img
            src="/imgs/clip-writer.png"
            alt="logo"
            className="object-contain "
          />
        </div>
      </main>
    </>
  );
}

export default UserAuth;
