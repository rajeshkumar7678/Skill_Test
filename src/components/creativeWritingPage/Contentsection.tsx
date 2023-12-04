import React from "react";
import BuyNowComponent from "./BuyNowComponent";
import { imageData } from "../constants/imageData";
import Creativewritingcard from "./Creativewritingcard";
import BuyNowComponent2 from "./BuyNowComponent2";

export default function Contentsection() {
  return (
    <div className="px-[7%] py-[2.5%] bg-PiGrayBackground flex flex-col gap-[30px] font-poppins ">
      <BuyNowComponent2
        details={{
          bgcolor: "bg-[#F3EDFF]",
          highlightedtext: "English Creative",
          text: "Writings & Solutions",
        }}
      />
      <div>
        <div className="px-[30px] py-[15px] flex justify-between bg-PiCards rounded-t-xl ">
          <div>
            <h2 className="text-[18px] font-semibold">
              Independent & Grammar School Past Exam Papers
            </h2>
          </div>
          <div className="hidden md:block">
            <h2 className="text-[18px] font-semibold">Question Paper</h2>
          </div>
          <div className="hidden md:block">
            <h2 className="text-[18px] font-semibold">Detailed Answers</h2>
          </div>
        </div>
        <Creativewritingcard
          data={[
            {
              cardimage: imageData.CARDIMAGE1.LINK,
              imgalttext: imageData.CARDIMAGE1.ALT,
              cardtitle: "English Creative Writing Paper 1",
              description: ` Descriptive creative writing
               continuing a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE2.LINK,
              imgalttext: imageData.CARDIMAGE2.ALT,
              cardtitle: "English Creative Writing Paper 2",
              description: ` Descriptive creative writing -
               continuing a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE3.LINK,
              imgalttext: imageData.CARDIMAGE3.ALT,
              cardtitle: "English Creative Writing Paper 3",
              description: ` Persuasive writing – charity appeal`,
            },
            {
              cardimage: imageData.CARDIMAGE4.LINK,
              imgalttext: imageData.CARDIMAGE4.ALT,
              cardtitle: "English Creative Writing Paper 4",
              description: ` Persuasive writing – book review`,
            },
            {
              cardimage: imageData.CARDIMAGE5.LINK,
              imgalttext: imageData.CARDIMAGE5.ALT,
              cardtitle: "English Creative Writing Paper 5",
              description: ` Descriptive creative writing -
               ending a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE6.LINK,
              imgalttext: imageData.CARDIMAGE6.ALT,
              cardtitle: "English Creative Writing Paper 6",
              description: `Descriptive creative writing - ending
               a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE7.LINK,
              imgalttext: imageData.CARDIMAGE7.ALT,
              cardtitle: "English Creative Writing Paper 7",
              description: ` Descriptive creative writing - diary 
               entry`,
            },
            {
              cardimage: imageData.CARDIMAGE8.LINK,
              imgalttext: imageData.CARDIMAGE8.ALT,
              cardtitle: "English Creative Writing Paper 8",
              description: `Descriptive creative writing - picture
               response`,
            },
            {
              cardimage: imageData.CARDIMAGE9.LINK,
              imgalttext: imageData.CARDIMAGE9.ALT,
              cardtitle: "English Creative Writing Paper 9",
              description: ` Narrative writing - science fiction`,
            },
            {
              cardimage: imageData.CARDIMAGE10.LINK,
              imgalttext: imageData.CARDIMAGE10.ALT,
              cardtitle: "English Creative Writing Paper 10",
              description: `Descriptive creative writing - 
               describing an object`,
            },
            {
              cardimage: imageData.CARDIMAGE1.LINK,
              imgalttext: imageData.CARDIMAGE1.ALT,
              cardtitle: "English Creative Writing Paper 11",
              description: ` Descriptive creative writing
               continuing a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE2.LINK,
              imgalttext: imageData.CARDIMAGE2.ALT,
              cardtitle: "English Creative Writing Paper 12",
              description: ` Descriptive creative writing -
               continuing a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE3.LINK,
              imgalttext: imageData.CARDIMAGE3.ALT,
              cardtitle: "English Creative Writing Paper 13",
              description: ` Persuasive writing – charity appeal`,
            },
            {
              cardimage: imageData.CARDIMAGE4.LINK,
              imgalttext: imageData.CARDIMAGE4.ALT,
              cardtitle: "English Creative Writing Paper 14",
              description: ` Persuasive writing – book review`,
            },
            {
              cardimage: imageData.CARDIMAGE5.LINK,
              imgalttext: imageData.CARDIMAGE5.ALT,
              cardtitle: "English Creative Writing Paper 15",
              description: ` Descriptive creative writing -
               ending a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE6.LINK,
              imgalttext: imageData.CARDIMAGE6.ALT,
              cardtitle: "English Creative Writing Paper 16",
              description: `Descriptive creative writing - ending
               a story on a given line`,
            },
            {
              cardimage: imageData.CARDIMAGE7.LINK,
              imgalttext: imageData.CARDIMAGE7.ALT,
              cardtitle: "English Creative Writing Paper 17",
              description: ` Descriptive creative writing - diary 
               entry`,
            },
            {
              cardimage: imageData.CARDIMAGE8.LINK,
              imgalttext: imageData.CARDIMAGE8.ALT,
              cardtitle: "English Creative Writing Paper 18",
              description: `Descriptive creative writing - picture
               response`,
            },
            {
              cardimage: imageData.CARDIMAGE9.LINK,
              imgalttext: imageData.CARDIMAGE9.ALT,
              cardtitle: "English Creative Writing Paper 19",
              description: ` Narrative writing - science fiction`,
            },
            {
              cardimage: imageData.CARDIMAGE10.LINK,
              imgalttext: imageData.CARDIMAGE10.ALT,
              cardtitle: "English Creative Writing Paper 20",
              description: `Descriptive creative writing - 
               describing an object`,
            },
          ]}
        />
      </div>

      <BuyNowComponent2
        details={{
          bgcolor: "bg-[#115DCE]",
          text: "Instant Access to English Creative Writings",
          textcolor: "PiWhiteBackground",
        }}
      />
    </div>
  );
}
