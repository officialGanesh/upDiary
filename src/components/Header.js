import React from 'react';
import HeaderItem from './HeaderItem';

import {
    HomeIcon,
    LogoutIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserCircleIcon
}from "@heroicons/react/outline"

function Header() {
  return(
      <>
        <header className='flex flex-col sm:flex-row m-5 justify-center items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="CREATE" Icon={PlusCircleIcon}/>
                <HeaderItem title="YOURBLOGS" Icon={PaperAirplaneIcon}/>
                <HeaderItem title="LOGOUT" Icon={LogoutIcon}/>
                <HeaderItem title="PROFILE" Icon={UserCircleIcon}/>
            </div>
        </header>
      </>
  );
}

export default Header;
