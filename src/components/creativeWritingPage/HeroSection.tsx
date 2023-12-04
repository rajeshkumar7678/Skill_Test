import React from "react";
import { imageData } from "../constants/imageData";

export default function HeroSection() {
  return (
    <div className="px-[7%] py-[2.5%] flex flex-col gap-[30px] bg-PiWhiteBackground">
      <div>
        <h1 className=" text-[50px] font-bold font-poppins pt-[15px]  text-center ">
          <span className=" text-PiGradentto justify-center">English </span>
          Creative Writings with Detailed Answers
        </h1>
      </div>

      <div className="flex justify-center lg:justify-between flex-wrap gap-[2%] font-poppins">
        <div className="flex flex-col justify-between gap-[20px] ">
          <div className="text-[22px] flex flex-col gap-[20px] ">
            <div className="flex items-center gap-[15px]">
              <img src={imageData.TICK.LINK} alt={imageData.TICK.ALT} />
              <p>23 Creative Writings Covering Different Styles</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <img src={imageData.TICK.LINK} alt={imageData.TICK.ALT} />
              <p>Model Answers with Hint, Plan and Checklist</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <img src={imageData.TICK.LINK} alt={imageData.TICK.ALT} />
              <p>Best for UK Schools Creative Writing Exams</p>
            </div>
          </div>
          <div className="flex gap-[50px] flex-wrap justify-center">
            <div className="flex flex-col gap-[10px] items-stretch">
              <div className="flex gap-[10px]">
                <img src={imageData.RATING.LINK} alt={imageData.RATING.ALT} />
                <p className="text-[16px]">4.9</p>
              </div>
              <div className="text-[18px]">
                <p>15,000+ Packs Sold</p>
              </div>
            </div>
            <div className="flex gap-[20px] flex-wrap justify-center m-[10px]">
              <img src={imageData.UNION.LINK} alt={imageData.UNION.ALT} />
              <button className="px-[4rem] py-[12px] text-[16px] md:text-[24px] text-PiWhiteBackground font-bold bg-PiButton rounded-xl hover:bg-PiGradentto">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-xl border-2">
          <div className="flex justify-between items-center px-4 py-3 bg-PiCards rounded-t-xl rounded-r-xl">
            <div className="flex gap-8">
              <p>Questions</p>
              <p className=" text-PiButton font-semibold">Answers</p>
            </div>
            <div className="flex">
              <img src={imageData.TIMER.LINK} alt={imageData.TIMER.ALT} />
              <p className=" bg-white">1m 30s</p>
            </div>
          </div>
          <div className="px-4 py-[10px] flex flex-col gap-4">
            <p className="text-[1rem]">
              19. The Formula for the area of a circle is A=πr2 .For the
              following task
              <br /> use π=3.14. Acircle of radius 10 cm is inside a square
              as...
            </p>
            <div className="flex justify-between">
              <img src={imageData.CIRCLE.LINK} alt={imageData.CIRCLE.ALT} />
              <img
                src={imageData.CALCULATION.LINK}
                alt={imageData.CALCULATION.ALT}
              />
            </div>
            <hr />
            <div className="text-[13.5px] flex   lg:gap-[20px]">
              <p className="font-semibold">
                See Similar <span className=" text-PiButton"> Topics</span>{" "}
              </p>
              <div className="flex lg:gap-[15px] ">
                <button className="lg:px-[15px] mx-1 border border-PiBorder rounded-[8px]">
                  Algebra
                </button>
                <button className="lg:px-[15px] mx-1 border border-PiBorder rounded-[8px]">
                  Numbers
                </button>
                <button className="lg:px-[15px] mx-1  border border-PiBorder rounded-[8px]">
                  Multiplication
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-[20px] bg-PiFooter rounded-xl font-poppins ">
        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] text-center h-[9rem] border-PiBlack ">
          <img
            src={imageData.SUCCESSRATE.LINK}
            alt={imageData.SUCCESSRATE.ALT}
          />
          <p className="text-[22px]">95% Success Rate</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] border-PiBlack text-center h-[9rem]">
          <img
            src={imageData.STRUCTURE_COURSE.LINK}
            alt={imageData.STRUCTURE_COURSE.ALT}
          />
          <p className="text-[22px]">30,000+ Questions</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] border-black text-center h-[9rem]">
          <img
            src={imageData.SMALL_SIZE_CLASS.LINK}
            alt={imageData.SMALL_SIZE_CLASS.ALT}
          />
          <p className="text-[22px]">Designed by 11+ Experts</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] text-center  h-[9rem]">
          <img
            src={imageData.PAST_PAPER_QUESTION.LINK}
            alt={imageData.PAST_PAPER_QUESTION.ALT}
          />
          <p className="text-[22px]">180+ Past Papers</p>
        </div>
      </div>
    </div>
  );
}
