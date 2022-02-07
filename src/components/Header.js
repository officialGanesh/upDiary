import React from 'react';
import HeaderItem from './HeaderItem';
import { Link } from "react-router-dom"
import { auth } from '../Firebase-config';
import {
    HomeIcon,
    LogoutIcon,
    PlusCircleIcon,
    UserCircleIcon
}from "@heroicons/react/outline"
import { signOut } from 'firebase/auth';


function Header({ setIsAuth }) {

  
  const logOutUser = () => {
    signOut(auth)
    localStorage.clear()
    setIsAuth(false)
  } 

  return(
      <>
        <header className='flex flex-col sm:flex-row m-5 justify-center items-center h-auto my-10'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
              <Link to="/home"><HeaderItem title="HOME" Icon={HomeIcon}/></Link>
              <Link to="/createblog"><HeaderItem title="CREATE" Icon={PlusCircleIcon}/></Link>
              <Link to="/" onClick={logOutUser}><HeaderItem title="LOGOUT" Icon={LogoutIcon}/></Link>
              <Link to="/dashboard"><HeaderItem title="PROFILE" Icon={UserCircleIcon}/></Link>
            </div>
        </header>
      </>
  );
}

export default Header;
