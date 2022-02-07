import React from 'react';

function CreateCard() {
  return (
      <>
    <div className="p-4 max-w-3xl text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-[35rem]">
    <form>
        <div>
            <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white font-semibold mb-4" placeholder="Blog about windows 11" required />

        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Blog Description</label>   
        <textarea rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write for a change..."></textarea>

        </div>
    </form>
    
</div>
      </>
  );
}

export default CreateCard;
