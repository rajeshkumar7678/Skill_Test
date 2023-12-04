import React from "react";
import { imageData } from "../constants/imageData";

function Banner() {
  return (
    <div className="flex justify-center items-center gap-[10px] lg:px-[3.2%] bg-PiBullet py-[10px] font-[600]">
      <div className="flex gap-[10px]">
        <img src={imageData.TROPHY.LINK} alt={imageData.TROPHY.ALT} />
        <p className="text-PiWhiteBackground">
          FREE 6_Days Trial <span className="font-[100]">11+ Exam Tution.</span>{" "}
          Book Now
        </p>
      </div>
      <div className="w-[1px] h-[24px] bg-PiWhiteBackground mx-[20px] md:block hidden"></div>
      <div className="hidden gap-[10px] md:flex">
        <img src={imageData.FLASH.LINK} alt={imageData.FLASH.ALT} />
        <p className="text-PiWhiteBackground">
          11+ Exam Revision Courses{" "}
          <span className="font-[100]">Filling Fast</span>
        </p>
      </div>
    </div>
  );
}
export default Banner;
