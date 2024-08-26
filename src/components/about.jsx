import Link from 'next/link';
import React from 'react';

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200 hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
          Our Story
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white">
            OUR STORY
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            We Will Find the Best Option
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          Glory44 - A Real Estate Project By World Wide Business Associates At National Highway 44. <br /> Nagpur&apos;s First Highway Touch Layout Where We Are Presenting A 200 Bedded Multispeciality Hospital Named &quot;Glory Institute Of Medical Science (GIMS)&quot; And A Nursing College.<br /> At Glory 44, Your Investments Will Be More Secure Than Any Other Place In Nagpur. <br /> Here You Get All The Amenities Like Community Hall, Gardens, Playground, Etc But Most Importantly Our Site Has An Attached Petrol Pump And An Attached Temple Named &quot;Balaji Devsthal Mandir&quot;.
        </p>
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          Glory 44 Is A 21 Acres Of Project With Different Phases. Currently We Are Presenting &quot;The Phase 1&quot; Of Glory 44 Which Is Scattered In 5 Acres.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
