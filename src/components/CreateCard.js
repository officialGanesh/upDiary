import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRef } from '../Firebase-config';

function CreateCard() {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const formHandler = async (e) => {
        e.preventDefault()
        await addDoc(colRef, {title:title, desc:text, createdAt: serverTimestamp() })
        setText("")
        setTitle("")

    }

    const clearFields = () => {
        setText("")
        setTitle("")
    }

  return (
      <>
    <div className="p-4 max-w-3xl text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-[35rem]">
    <form>
        <div>
            <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white font-semibold mb-4" placeholder="Blog about windows 11"  onChange = {(e) => {setTitle(e.target.value)}} value={title} required />

        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Blog Description</label>   
        <textarea rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write for a change..." onChange={(e) => {setText(e.target.value)}} value={text}/>
        
        <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5 mx-2" onClick={formHandler} >POST</button>

            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-4 mx-3" onClick={clearFields}>CLEAR</button>
            
        </div>

        </div>
    </form>
    
</div>
      </>
  );
}

export default CreateCard;
