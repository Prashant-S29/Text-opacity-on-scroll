import CHAR_BY_CHAR from "@/clientComponents/charByChar";
import WHOLE_AT_ONCE from "@/clientComponents/wholeAtOnce";
import WORD_BY_WORD from "@/clientComponents/wordByWord";
import React from "react";

const HOME = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="text-[14px] sm:text-[18px] font-black">SCROLL DOWN</span>
      </div>
      <div className=" text-[20px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[52px] font-black ">
        <div className="w-full h-screen bg-black text-white p-5">
          <div>
            <span className="text-[14px] sm:text-[18px] font-black">CHARCTER BY CHARCTER</span>
          </div>
          <CHAR_BY_CHAR />
        </div>
        <div className="w-full h-screen bg-white p-5 text-black">
          <div>
            <span className="text-[14px] sm:text-[18px] font-black">WORD BY WORD</span>
          </div>
          <WORD_BY_WORD />
        </div>
        <div className="w-full h-screen bg-black text-white p-5">
          <div>
            <span className="text-[14px] sm:text-[18px] font-black">WHOLE AT ONCE</span>
          </div>
          <WHOLE_AT_ONCE />
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="text-[14px] sm:text-[18px] font-black">SCROLL UP</span>
      </div>

      {/* </div> */}
    </>
  );
};

export default HOME;
