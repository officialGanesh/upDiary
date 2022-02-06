import React from 'react';

function LogInSignup() {
  return(
    <>
      <div className='mt-36 ml-12 '>
        <div className='text-white text-6xl  font-semibold mb-10 '>Be creative. <br /> Write something.</div> 
        <div className='p-4 max-w-2xl  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-8'>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your email</label>
            <input type="email" className='bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"' placeholder='user@gmail.com'  required/>

            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your password</label>
            <input type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"' placeholder="********" required/>
          </div>
          <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'>Login to your account</button>
          {/* sign in with google */}
          <hr className='border '/>
          
          </form>
        </div>
        <div className='float-right inline -mt-[41rem] mr-12'>
          <img src="/imgs/clip-writer.png" alt="logo" className='object-contain '/>  
        </div>        
      </div>
    </>
  );
}

export default LogInSignup;
