import React from "react";

export default function BuyNowComponent2({ details }: any) {
  const textcolor1 = details?.textcolor ? details.textcolor : "PiBlack";
  const bgcolor1 = details?.bgcolor ? details.bgcolor : "";

  return (
    <div>
      {details ? (
        <div
          className={`px-[3.5%] py-[20px] flex justify-center lg:justify-between flex-wrap font-poppins text-center items-center ${bgcolor1} rounded-xl text-${textcolor1}`}
        >
          <p className="text-[2.25rem]  font-bold ">
            <span className="text-PiGradentto">{details?.highlightedtext}</span>{" "}
            {details?.text}
          </p>
          <button className="px-[64px] py-[12px] text-[16px] md:text-[24px] text-PiWhiteBackground font-bold bg-PiButton rounded-xl hover:bg-PiGradentto">
            Buy Now
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
