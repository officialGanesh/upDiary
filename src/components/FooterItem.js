import React from "react";

function FooterItem({Icon}) {
  return (
    <>
      <div className="flex flex-col items-center cursor-pointer w-12 m-6">
          <Icon className="h-8 mb-1 sm:w-20 hover:animate-spin"/>
      </div>
    </>
  );
}

export default FooterItem;
