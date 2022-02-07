import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../Firebase-config';



function UserAuth({ setIsAuth }) {


  const navigate = useNavigate()

  const signInWithGoogle =  () => {

    try {
      
      signInWithPopup(auth,provider).then((res) => {
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
        navigate("/home")
        
      }).catch(err=>console.log(err))

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <main className='mt-14 ml-12 sm:flex sm:flex-col  lg:block'>
        <div className='text-white text-6xl  font-semibold mb-10 '>Be creative. <br /> Write something.</div> 
        <div className='p-4 max-w-3xl  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-8'>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your email</label>
            <input type="email" className='bg-gray-50 text-white border mb-3  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"' placeholder='user@gmail.com'  required/>

            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your password</label>
            <input type="password" className='bg-gray-50 text-white border   text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"' placeholder="********" required/>
          </div>
          <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'>Login to your account</button>
          </form>

          <hr className='border my-4 '/>
          {/* sign in with google */}
          <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer' onClick={signInWithGoogle}> Login with Google</button>

        </div>
        <div className='lg:float-right inline sm:float-none   -mt-[41rem] mr-12 '>
          <img src="/imgs/clip-writer.png" alt="logo" className='object-contain '/>  
        </div>        
      </main>
    </>
  );
}

export default UserAuth;
