import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../Firebase-config";

function CardBlog({ title, desc, author, id, authorId }) {
  const removeDoc = async (postId) => {
    const post = doc(db, "blogPosts", postId);
    await deleteDoc(post);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center my-4 mx-80">
        <div className="p-6 flex flex-col w-[60rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5">
          <div>
            {authorId === auth.currentUser.uid && (
              <button
                className=" inline-flex items-center p-1.5 rounded-full  float-right border hover:bg-red-600 "
                onClick={() => {
                  removeDoc(id);
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            )}
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>

          <p className="mb-3 text-white font-bold"> {author}</p>
        </div>
      </main>
    </>
  );
}

export default CardBlog;
