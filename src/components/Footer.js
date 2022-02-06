import React from 'react';
import FooterItem from './FooterItem';
import {
  AiOutlineFacebook,
   AiOutlineGoogle,
    AiOutlineInstagram,
     AiOutlineTwitter
} from "react-icons/ai"

function Footer() {
  return(
      <>
        <footer className='flex flex-col sm:flex-row justify-center items-center h-auto mt-[10rem] ml-[47rem]'>
            
            <div className='flex flex-grow  max-w-full'>
                
                <FooterItem Icon={AiOutlineFacebook}/>
                <FooterItem Icon={AiOutlineInstagram}/>
                <FooterItem Icon={AiOutlineTwitter}/>
                <FooterItem Icon={AiOutlineGoogle}/>
            </div>
        </footer>
      </>
  );
}

export default Footer;
