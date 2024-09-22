import { useState } from "react";
import Navbar from "./components/Navbar";
import TipSection from "./components/TipSection";
import WhatWeOffer from "./components/WhatWeOffer";
import {
  APP_STORE_IMG,
  GIRL_TYPING_PIC,
  GOOGLE_PLAY_IMG,
  RIGHT_ARROW,
  WOMEN_IN_SUITS,
} from "./constants";
import Footer from "./components/Footer";
import ManagementTab from "./components/ManagementTab";
import TestimonialTab from "./components/TestimonialTab";

export default function App() {
  const [feedBack, setFeedBack] = useState("");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Navbar />
      <main className="w-full h-full mt-24">
        <div className="bg-[url('/bg-img.png')] bg-no-repeat bg-cover w-full min-h-[853px]">
          <div className="md:pt-[185px] pt-[92px] flex flex-col items-center md:px-[176px] px-[10px]">
            <p className="font-normal text-5xl text-white text-left">
              Power your Growth: Innovative solutions for a brighter Future
            </p>
            <p className="font-normal text-3xl text-white text-center max-w-[1130px] px-2 pt-10">
              We provide the tools, insights, and expertise to accelerate your
              growth and outpace the competition. Whether you’re a startup or an
              established enterprise, we’re here to help you achieve your goals
              and unlock new potential.
            </p>
            <button className="mt-[70px] min-w-[279px] min-h-[52px] bg-jadaad-blue text-center text-[18px] text-white font-normal rounded-md">
              Get Started
            </button>
            <div className="mt-24 pb-16 flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-[54px] gap-3">
              <img
                src={GOOGLE_PLAY_IMG}
                width={224}
                height={87}
                alt="google play"
                style={{ objectFit: "cover" }}
              />
              <img
                src={APP_STORE_IMG}
                width={199}
                height={55}
                alt="apple store image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="-translate-y-9">
          <div className="mx-auto bg-white min-h-[287px] py-12 px-[82px] max-w-[1384px] rounded-t-[20px] md:rounded-[20px]">
            <div className="w-full flex gap-5 xl:flex-nowrap flex-wrap justify-center px-[82px] space-y-5">
              <TipSection title="Valuable Insights" />
              <TipSection title="Quality Services" />
              <TipSection title="Support 24/7" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full relative bg-white justify-center items-center mt-[100px]">
          <div className="bg-[#F2F2F2A6] w-full flex flex-col justify-center items-center px-[50px] md:px-[100px] py-[38px]">
            <div className="flex flex-col text-black justify-center items-center 2xl:items-start gap-[24px] w-full">
              <p className="font-normal text-4xl text-center text-wrap">
                Our Mission
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="text-lg font-normal text-justify max-w-[663px] text-wrap"
              >
                Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet
                amet mi odio temporLorem ipsum dolor sit amet consectetur. Massa
                ipsum quam amet amet mi odio temporLorem ipsum dolor sit amet
                consectetur. Massa ipsum quam amet amet mi odio tempor
              </p>
              <button className="bg-jadaad-blue rounded-md w-[155px] h-[52px] mt-[45px] text-lg font-normal text-center text-white">
                Read More
              </button>
            </div>
          </div>
          <img
            className="2xl:absolute mt-0 right-[100px]"
            src={GIRL_TYPING_PIC}
            width={648}
            height={423}
            alt="A lady typing"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mt-[100px]">
          <div className="flex flex-col justify-center items-center gap-[54px] bg-white">
            <p className="leading-[56px] font-normal text-[45px] text-black">
              What We Offer
            </p>
            <div className="flex flex-wrap justify-center items-center gap-[36px] px-8">
              <WhatWeOffer title="Financial Consulting" />
              <WhatWeOffer title="Trades and Stocks" />
              <WhatWeOffer title="Strategy Planning" />
            </div>
          </div>
        </div>
        <div className="bg-jadaad-blue w-full mt-[109px]">
          <div className="max-w-[855px] w-full font-normal text-white flex flex-col px-[40px] md:pl-[121px]">
            <p className="md:text-4xl text-2xl pb-8 pt-16">
              Feel Free to reach out to us if you have feedback
            </p>
            <p style={{ fontFamily: "Inter" }} className="text-2xl pb-8">
              Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
              mi odio temporLorem ipsum dolor sit amet consectetur. Massa ipsum
              quam amet amet mi odio tempor
            </p>
            <div className="md:w-[447px] md:bg-white bg-none rounded-[10px] flex md:flex-row flex-col gap-2 justify-between md:items-center items-start mb-[35px]">
              <input
                className="py-[16px] w-full px-[20px] text-black placeholder:text-[18px] placeholder:text-black outline-none md:rounded-l-[10px] rounded-l-0"
                type="text"
                value={feedBack}
                onChange={(e) => setFeedBack(e.target.value)}
                placeholder="Enter your email"
              />
              <button className="bg-jadaad-blue md:w-[155px] w-full h-[56px] rounded-[10px] text-[18px] text-center border border-white">
                Send
              </button>
            </div>
          </div>
        </div>
        <p className="font-normal text-[45px] leading-[56px] text-center mb-[46px] mt-[85px]">
          Our Latest News
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[43px] mb-[144px] md:px-0 px-9">
          <ManagementTab />
        </div>
        <p className="font-normal md:text-[45px] text-[35px] leading-[56px] text-center">
          Frequently Asked Questions
        </p>
        <div className="flex 2xl:flex-nowrap flex-wrap w-full bg-white items-center justify-center mt-[48px] px-[50px] md:px-[100px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full min-h-[482px]">
              {[1, 2, 3, 4, 5].map((_, idx) => {
                return (
                  <div
                    className="h-full flex justify-start items-center"
                    key={idx}
                  >
                    <button className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-[17px] max-w-[733px] py-[24px]">
                        <div className="min-w-[30px] min-h-[30px] rounded-full bg-jadaad-blue md:ml-[19px]"></div>
                        <p className="text-[18px] font-normal">
                          How do I manage finance
                        </p>
                      </div>
                      <img
                        className="md:mr-[26px]"
                        src={RIGHT_ARROW}
                        alt="right arrow"
                        width={24}
                        height={24}
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-jadaad-blue w-full flex justify-center items-center rounded-[10px]">
            <div className="pt-[87px] px-[40px] mb-[41px] text-white">
              <p className="font-normal text-4xl">How do i manage finance?</p>
              <p
                style={{ fontFamily: "Inter" }}
                className="text-2xl mt-[40px] leading-[30px] font-normal text-left text-white/90 max-w-[694px]"
              >
                Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet
                amet mi odio tempor. Lorem ipsum dolor sit amet consecteturLorem
                ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi
                odio tempor. Lorem ipsum dolor sit amet consecteturLorem ipsum
                dolor sit amet consectetur. Massa ipsum quam amet amet mi odio
                tempor. Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                sit amet consectetur. Massa ipsum quam amet amet mi odio tempor.
                Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                consectetur. Massa ipsum quam amet amet mi odio tempor. Lorem
                ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                consectetur. Massa ipsum quam amet amet mi odio tempor. Lorem
                ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex flex-col justify-center items-center w-full md:px-[100px] px-[50px]">
          <p className="font-normal text-5xl leading-[56px] text-center mb-[40px]">
            Testimonials
          </p>
          <div className="flex xl:flex-nowrap flex-wrap justify-center gap-11 mb-[144px]">
            <TestimonialTab />
            <TestimonialTab />
            <TestimonialTab />
          </div>
        </div>
        <div className="mt-[100px] w-full">
          <div className="w-full flex justify-center flex-wrap gap-20">
            <img
              src={WOMEN_IN_SUITS}
              width={778}
              height={430}
              alt="women in suits"
              style={{ objectFit: "cover" }}
            />
            <div className="py-[42px] ">
              <div className="flex flex-col">
                <p className="text-lg font-normal mb-4 text-black">
                  Contact us
                </p>
                <div className="flex flex-col gap-6 font-normal text-lg">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className=" w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
                  />
                </div>
                <button className="text-white font-normal text-lg bg-jadaad-blue w-full min-h-[56px] rounded-[10px] mt-[40px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
