import React from "react";
import { auth } from "../Firebase-config";

function Profile() {
  return (
    <>
      <div className="block mx-[40rem] py-4 px-10  ">
        <p className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-fit w-[23%] rounded-full my-5 mx-10  md:h-auto md:w-48 "
            src={auth.currentUser.photoURL}
            alt="User-profile"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {auth.currentUser.displayName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {auth.currentUser.email}
            </p>
          </div>
        </p>
      </div>
    </>
  );
}

export default Profile;
