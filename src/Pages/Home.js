import React from "react";
import { Link } from "react-router-dom";
import CakeImg from "assets/images/image1.png";

export const Home = () => {

  return (
    <div className="w-[100vw] h-[100vh] overflow-auto p-[50px_24px] md:p-[60px_200px] lg:p-[100px_160px] bg-[#F6F2FF] text-center">
      <div className="lg:max-w-[1440px] lg:flex lg:items-center lg:justify-between mx-auto">
        <div className="hidden lg:block basis-1/2 max-w-1/2">
          <img className="w-[440px] inline" src={CakeImg} alt="cake" />
        </div>
        <div className="lg:basis-1/2 lg:max-w-[500px]">
          <div className="lg:basis-1/2 lg:max-w-1/2 text-center lg:text-right">
            <p className="text-[#240D57] text-[36px] leading-[36px] md:text-[64px] md:leading-[64px] font-bold font-[Helvetica]">Imagine if</p>
            <p className="gradient text-[36px] leading-[41.4px] md:text-[64px] md:leading-[74px] font-bold font-[Helvetica]">Snapchat</p>
            <p className="text-[#240D57] text-[36px] leading-[36px] md:text-[64px] md:leading-[64px] font-bold font-[Helvetica]">had events.</p>
          </div>
          <p className="text-center lg:text-right mt-[16px] text-[16px] leading-[18.4px] md:text-[24px] md:leading-[27.6px] font-light">
            Easily host and share events with your friends across any social media.
          </p>
          <div className="text-center mt-[36px] md:mt-[55px] lg:hidden">
            <img className="w-[165px] md:w-[311px] inline" src={CakeImg} alt="cake" />
          </div>
          <div className="mt-[34px] lg:mt-[52px]">
            <Link to="/create" className="flex items-center justify-center bg-[linear-gradient(90deg,_#8456EC_3.25%,_#E87BF8_100%)] rounded-[10px] w-[187px] h-[50px] md:w-[320px] md:h-[55px] text-[#fff] text-[16px] leading-[18.4px] md:text-[20px] md:leading-[23px] font-bold mx-auto lg:mr-0">🎉 Create my event</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
