import React from "react";

const ScreenSizeComponent = () => {
  return (
    <span className="text-appPrimaryColor fixed top-24 text-2xl font-bold">
      <p className="hidden 2xl:inline"> 2XL</p>
      <p className="hidden xl:inline 2xl:hidden"> XL</p>
      <p className="hidden lg:inline xl:hidden 2xl:hidden"> LG</p>
      <p className="hidden md:inline lg:hidden xl:hidden 2xl:hidden"> MD</p>
      <p className="inline md:hidden lg:hidden xl:hidden 2xl:hidden"> SM</p>
    </span>
  );
};

export default ScreenSizeComponent;
