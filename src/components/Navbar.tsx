import React from "react";
import { imageData } from "@/components/constants/imageData";
import Banner from "./creativeWritingPage/Banner";
export default function Navbar() {
  return (
    <div>
      <Banner />

      <div className="flex px-[10px] lg:px-[3.5%] auto justify-between items-center h-[50px] font-poppins">
        <div className="flex">
          <img src={imageData.PI_LOGO.LINK} alt={imageData.PI_LOGO.ALT} />
          <img
            src={imageData.PI_LOGO_TEXT.LINK}
            alt={imageData.PI_LOGO_TEXT.ALT}
          />
        </div>
        <div className=" hidden lg:block">
          <div className="flex justify-center items-center gap-[65px] font-normal">
            <p className=" font-semibold text-[18px]">Exam Papers</p>
            <p> 11+ Courses</p>
            <p> 11+ Tuition</p>
            <p> Videos</p>
            <p> Mock Exams</p>
          </div>
        </div>

        <div className="flex gap-[20px]">
          <img src={imageData.PHONE.LINK} alt={imageData.PHONE.ALT} />
          <img src={imageData.AVATAR.LINK} alt={imageData.AVATAR.ALT} />
          <img src={imageData.CART.LINK} alt={imageData.CART.ALT} />
        </div>
      </div>

      <div className=" hidden lg:block">
        <div className="px-[100px] bg-PiSubheader flex justify-between items-center h-[50px] flex-wrap">
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">Pre 11+</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">11+ Papers</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">13+ Papers</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">GCSE</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">SATs</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">Pre-Tests</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="text-[16px]">Pricing</p>
            <img
              src={imageData.ARROW_DOWN.LINK}
              alt={imageData.ARROW_DOWN.ALT}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
