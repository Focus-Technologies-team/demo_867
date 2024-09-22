import { WOMEN_IN_SUITS } from "../constants";

export default function ContactUs() {
  return (
    <div className="mt-[100px] w-full">
      <div className="w-full flex items-center justify-center flex-wrap 2xl:gap-20 md:px-[100px] px-2">
        <img
          className="2xl:pl-[100px]"
          src={WOMEN_IN_SUITS}
          width={778}
          height={430}
          alt="women in suits"
          style={{ objectFit: "cover" }}
        />
        <div className="py-[42px] w-[596px]">
          <div className="flex flex-col">
            <p className="text-lg font-normal mb-4 text-black">Contact us</p>
            <div className="flex flex-col gap-6 font-normal text-lg">
              <input
                type="text"
                placeholder="Full Name"
                className=" w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:placeholder:text-lg placeholder:text-sm md:text-lg text-sm md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:placeholder:text-lg placeholder:text-sm md:text-lg text-sm md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full min-h-[56px] bg-[#D9D9D980] placeholder:text-black md:placeholder:text-lg placeholder:text-sm md:text-lg text-sm md:text-black text-white md:pl-[60px] md:px-0 px-2 outline-none rounded-[10px]"
              />
            </div>
            <button className="text-white font-normal md:text-lg text-sm bg-jadaad-blue w-full min-h-[56px] rounded-[10px] mt-[40px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
