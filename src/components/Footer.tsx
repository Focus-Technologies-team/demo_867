import {
  BUSINESS_LOGO_WHITE,
  INSTAGRAM_LOGO,
  X_LOGO,
  FACEBOOK_LOGO,
} from "../constants";

export default function Footer() {
  return (
    <div className="mt-[100px] w-full bg-jadaad-blue border border-[#CCCCCC]">
      <div className="flex justify-start items-center px-[50px] sm:pl-[100px]">
        <div className="flex sm:flex-row flex-col justify-center gap-[75px] items-start">
          <div className="flex flex-col pt-[58px]">
            <img
              src={BUSINESS_LOGO_WHITE}
              alt="business logo"
              width={126}
              height={25}
            />
            <p
              style={{ fontFamily: "Inter" }}
              className="mt-[33px] md:text-[16px] text-sm text-white leading-[30px] mb-[32px]"
            >
              Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
              mi odio tempor.
              <br /> Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
              amet consectetur. Massa ipsum quam amet amet mi odi
            </p>
            <div className="flex gap-[31px]">
              <img
                src={INSTAGRAM_LOGO}
                width={30}
                height={30}
                alt="instagram logo"
                className="cursor-pointer"
              />
              <img
                src={X_LOGO}
                width={30}
                height={30}
                alt="x logo"
                className="cursor-pointer"
              />
              <img
                src={FACEBOOK_LOGO}
                width={30}
                height={30}
                alt="facebook logo"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex gap-[56px] text-white mt-[58px]">
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[18px] pb-[24px]">Quick links</li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
            </ul>
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[18px] pb-[24px]">Resources</li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
            </ul>
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[18px] pb-[24px]">About</li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
              <li style={{ fontFamily: "Inter" }} className="md:text-[16px] text-sm">
                Lorem ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-start px-[50px] sm:px-[100px]">
        <hr className="w-full border border-[#CCCCCC] mt-[5px]" />
      </div>
      <div className="flex justify-center w-full gap-2 md:text-lg text-sm py-[32px] font-normal text-white">
        <p>Business</p>
        <p>2022. All rights reserved.</p>
      </div>
    </div>
  );
}
