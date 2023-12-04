import React from "react";
import { imageData } from "../constants/imageData";

export default function BuyNowComponent({ details }: any) {
  const textcolor1 = details?.textcolor ? details.textcolor : "PiBlack";
  const bgcolor1 = details?.bgcolor ? details.bgcolor : "";

  const isSmallScreen = window.innerWidth <= 375; // You can adjust the breakpoint

  return (
    <div>
      {details ? (
        <div>
          {isSmallScreen ? (
            // Code for small screens
            <p>Small Screen Content</p>
          ) : (
            // Code for other screen sizes
            <p>Other Screen Sizes Content</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

{
  /* <div
className={`flex items-center ${bgcolor1} rounded-xl text-${textcolor1}`}
>
<div
  className={`px-[3.5%] py-[20px] flex justify-center lg:justify-between flex-wrap font-poppins text-center items-center ${bgcolor1} rounded-xl text-${textcolor1}`}
>
  <div className="flex">
    <p className="text-[16px] lg:text-[2.25rem] font-bold ">
      <span className="text-PiGradentto">
        {details?.highlightedtext}
      </span>{" "}
      {details?.text}
    </p>
    <p className="block sm:hidden">hello</p>
  </div>

  <button className="px-[64px] py-[12px] text-[16px] md:text-[24px] text-PiWhiteBackground font-bold bg-PiButton rounded-xl hover:bg-PiGradentto">
    Buy Now
  </button>
</div>
<div>
  <img
    className="block sm:hidden"
    src={imageData.GROUP.LINK}
    alt=""
  />
</div>
</div> */
}
