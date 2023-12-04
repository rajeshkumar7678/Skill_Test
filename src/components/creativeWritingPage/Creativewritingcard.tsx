import React from "react";
import { imageData } from "../constants/imageData";

export default function Creativewritingcard({ data }: any) {
  return (
    <div className=" shadow-md hover:shadow-xl font-poppins">
      {data ? (
        data.map((item: any) => (
          <div className="flex justify-between flex-wrap px-[30px] py-[15px] border-[0.5px] hover:bg-slate-100">
            <div className="flex gap-[30px] flex-wrap pb-3">
              <div className="sm:w-auto w-[17rem]">
                <img
                  className="w-full h-full object-cover"
                  src={item?.cardimage}
                  alt={item?.imgalttext}
                />
              </div>
              <div>
                <h3 className=" text-[18px] font-semibold">
                  {item?.cardtitle}
                </h3>
                <p className="whitespace-pre-line">{item?.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <img
                src={imageData.DOWNLOAD_ICON.LINK}
                alt={imageData.DOWNLOAD_ICON.ALT}
              />
              <p>Download</p>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <img src={imageData.LOCK.LINK} alt={imageData.LOCK.ALT} />
              <p>Answers</p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
