import { useState } from "react";
import Navbar from "./components/Navbar";
import TipSection from "./components/TipSection";
import WhatWeOffer from "./components/WhatWeOffer";
import {
  APP_STORE_IMG,
  GATHERING_IMG,
  GIRL_TYPING_PIC,
  GOOGLE_PLAY_IMG,
  LARA_PROFILE,
  RIGHT_ARROW,
  WOMEN_IN_SUITS,
} from "./constants";
import Footer from "./components/Footer";

export default function App() {
  const [feedBack, setFeedBack] = useState("");
  return (
    <div className="w-full h-full flex flex-col items-center flex-wrap">
      <Navbar />
      <main className="w-full h-full">
        <div className="bg-[url('/bg-img.png')] bg-no-repeat bg-cover w-full flex-wrap sm:h-[853px]">
          <div className="sm:pt-[185px] pt-[92px] flex flex-col items-center sm:px-[176px] px-[10px]">
            <p className="font-normal text-[48px] text-white text-left">
              Power your Growth: Innovative solutions for a brighter Future
            </p>
            <p className="font-normal text-[32px] text-white text-left sm:px-[184px] px-[10px] pt-[42px] leading-[40px]">
              We provide the tools, insights, and expertise to accelerate your
              growth and outpace the competition. Whether you’re a startup or an
              established enterprise, we’re here to help you achieve your goals
              and unlock new potential.
            </p>
            <button className="mt-[70px] w-[279px] h-[52px] bg-jadaad-blue text-center text-[18px] text-white font-normal rounded-md">
              Get Started
            </button>
            <div className="mt-[92px] mb-[37px] flex sm:flex-row flex-col flex-wrap justify-center items-center sm:gap-[54px] gap-3">
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
          <div className="sm:absolute flex flex-wrap bottom-0 left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-64 bg-white py-[49px] px-[82px] sm:mx-0 mx-2 rounded-t-[20px] sm:rounded-[20px] ">
            <div className="w-full flex sm:flex-row flex-col sm:justify-between items-center sm:px-[82px] sm:space-y-0 space-y-5">
              <TipSection title="Valuable Insights" />
              <TipSection title="Quality Services" />
              <TipSection title="Support 24/7" />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse w-full relative bg-white items-center sm:mt-[300px] mt-[50px] sm:bg-none bg-[url('/girl-typing.png')] bg-no-repeat bg-cover">
          <div className="sm:bg-[#F2F2F2A6] bg-none w-full flex flex-col justify-center items-center px-[50px] sm:px-[100px] py-[38px] backdrop-blur-xl">
            <div className="flex flex-col text-black justify-center items-start gap-[24px] w-full">
              <p className="font-normal text-[36px] leading-[45px] text-center text-wrap">
                Our Mission
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="leading-[30px] text-[16px] font-normal text-justify sm:w-[663px] text-wrap"
              >
                Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet
                amet mi odio temporLorem ipsum dolor sit amet consectetur. Massa
                ipsum quam amet amet mi odio temporLorem ipsum dolor sit amet
                consectetur. Massa ipsum quam amet amet mi odio tempor
              </p>
              <button className="bg-jadaad-blue rounded-md w-[155px] h-[52px] mt-[45px] text-[18px] font-normal text-center text-white">
                Read More
              </button>
            </div>
          </div>
          <div className="absolute right-[100px] flex justify-center">
            <img
              className="md:block hidden"
              src={GIRL_TYPING_PIC}
              width={648}
              height={423}
              alt="A lady typing"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="mt-[169px]">
          <div className="flex flex-col justify-center items-center gap-[54px] bg-white">
            <p className="leading-[56px] font-normal text-[45px] text-black">
              What We Offer
            </p>
            <div className="flex sm:flex-row flex-col gap-[36px] px-8">
              <WhatWeOffer title="Financial Consulting" />
              <WhatWeOffer title="Trades and Stocks" />
              <WhatWeOffer title="Strategy Planning" />
            </div>
          </div>
        </div>
        <div className="bg-jadaad-blue w-full mt-[109px]">
          <div className="sm:w-[855px] w-full font-normal text-white flex flex-col px-[40px] sm:pl-[121px]">
            <p className="text-[40px] leading-[50px] pb-[33px] pt-[65px]">
              Feel Free to reach out to us if you have feedback
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[24px] leading-[30px] pb-[33px]"
            >
              Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
              mi odio temporLorem ipsum dolor sit amet consectetur. Massa ipsum
              quam amet amet mi odio tempor
            </p>
            <div className="sm:w-[447px] sm:bg-white bg-none rounded-[10px] flex sm:flex-row flex-col gap-2 justify-between sm:items-center items-start mb-[35px]">
              <input
                className="py-[16px] w-full px-[20px] text-black placeholder:text-[18px] placeholder:text-black outline-none sm:rounded-l-[10px] rounded-l-0"
                type="text"
                value={feedBack}
                onChange={(e) => setFeedBack(e.target.value)}
                placeholder="Enter your email"
              />
              <button className="bg-jadaad-blue sm:w-[155px] w-full h-[56px] rounded-[10px] text-[18px] text-center border border-white">
                Send
              </button>
            </div>
          </div>
        </div>
        <p className="font-normal text-[45px] leading-[56px] text-center mb-[46px] mt-[85px]">
          Our Latest News
        </p>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-[43px] mb-[144px] sm:px-0 px-9">
          {[
            "Financial Management",
            "Financial Management",
            "Financial Management",
          ].map((items, idx) => {
            return (
              <div key={idx}>
                <img
                  src={GATHERING_IMG}
                  width={464}
                  height={260}
                  alt="conference pic"
                  className="mb-[32px]"
                  style={{ objectFit: "cover" }}
                />
                <WhatWeOffer className="shadow-none" title={items} />
              </div>
            );
          })}
        </div>
        <p className="font-normal sm:text-[45px] text-[35px] leading-[56px] text-center">
          Frequently Asked Questions
        </p>
        <div className="flex sm:flex-row flex-col-reverse flex-grow w-full bg-white items-center justify-center mt-[113px] sm:px-[100px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col py-[21px] w-full sm:h-[482px] sm:px-0 px-2">
              {[1, 2, 3, 4, 5].map((_, idx) => {
                return (
                  <div
                    className="h-full flex justify-start items-center"
                    key={idx}
                  >
                    <button className="flex w-full items-center justify-between">
                      <div className="flex gap-[17px] w-full sm:w-[733px] py-[24px]">
                        <div className="w-[30px] h-[30px] rounded-full bg-jadaad-blue sm:ml-[19px]"></div>
                        <p className="text-[18px] font-normal">
                          How do I manage finance
                        </p>
                      </div>
                      <img
                        className="sm:mr-[26px]"
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
          <div className="bg-jadaad-blue flex justify-center items-center sm:mx-0 mx-2 rounded-[10px]">
            <div className="pt-[87px] sm:px-[40px] px-[20px] mb-[41px] text-white">
              <p className="font-normal sm:text-[36px] text-[30px] leading-[45px]">
                How do i manage finance?
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="text-[20px] mt-[40px] leading-[30px] font-normal text-left text-white/90 sm:w-[694px]"
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
        <div className="mt-[100px] flex flex-col justify-center items-center w-full sm:px-[100px]">
          <p className="font-normal text-[45px] leading-[56px] text-center mb-[40px]">
            Testimonials
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-[43px] mb-[144px]">
            {[
              "Financial Management",
              "Financial Management",
              "Financial Management",
            ].map((_, idx) => {
              return (
                <div className="rounded-[20px] w-full bg-[#54C5F933]" key={idx}>
                  <div className="flex flex-col justify-start py-[39px] px-[26px]">
                    <div className="flex gap-[19px]">
                      <div>
                        <img
                          src={LARA_PROFILE}
                          width={70}
                          height={70}
                          alt="profile pic"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex flex-col gap-[12px] font-normal">
                        <p className="text-[18px]">Lara Angel</p>
                        <p className="text-[15px]">Entrepreneur</p>
                      </div>
                    </div>
                    <div className="mt-[40px] flex flex-col gap-5">
                      <p className="text-[18px]">Strategy Planning</p>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[16px] leading-[30px]"
                      >
                        Lorem ipsum dolor sit amet consectetur. Massa ipsum quam
                        amet amet mi odio tempor. Lorem ipsum dolor sit amet
                        consecteturLorem ipsum dolor sit amet consectetur. Massa
                        ipsum quam amet amet mi odi
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:mt-[100px] sm:px-[100px] w-full sm:bg-none bg-[url('/women-in-suits.png')] bg-no-repeat bg-cover">
          <div className="w-full flex sm:flex-row flex-col gap-[78px] sm:px-0 px-[30px] backdrop-blur-lg">
            <img
              src={WOMEN_IN_SUITS}
              className="sm:pl-[76px] sm:block hidden"
              width={778}
              height={430}
              alt="women in suits"
              style={{ objectFit: "cover" }}
            />
            <div className="py-[42px] w-full">
              <div className="flex flex-col">
                <p className="text-[18px] font-normal mb-[14px] text-black">
                  Contact us
                </p>
                <div className="flex flex-col gap-[23px] font-normal text-[18px]">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[56px] bg-[#D9D9D980] placeholder:text-black sm:text-black text-white sm:pl-[60px] sm:px-0 px-2 outline-none rounded-[10px]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full h-[56px] bg-[#D9D9D980] placeholder:text-black sm:text-black text-white sm:pl-[60px] sm:px-0 px-2 outline-none rounded-[10px]"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full h-[56px] bg-[#D9D9D980] placeholder:text-black sm:text-black text-white sm:pl-[60px] sm:px-0 px-2 outline-none rounded-[10px]"
                  />
                </div>
                <button className="text-white font-normal text-[18px] bg-jadaad-blue w-full h-[56px] rounded-[10px] mt-[40px]">
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
