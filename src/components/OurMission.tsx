import { GIRL_TYPING_PIC } from "../constants";

export default function OurMission() {
  return (
    <div className="flex flex-col w-full relative bg-white justify-center items-center">
      <div className="bg-[#F2F2F2A6] w-full flex flex-col justify-center items-center px-2 md:px-[100px] py-[38px] md:rounded-none rounded-md">
        <div className="flex flex-col text-black justify-center items-center 2xl:items-start gap-[24px] w-full">
          <p className="font-normal md:text-4xl text-2xl text-center text-wrap">
            Our Mission
          </p>
          <p
            style={{ fontFamily: "Inter" }}
            className="md:text-lg text-sm font-normal max-w-[663px] leading-8 text-left text-wrap"
          >
            Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
            mi odio temporLorem ipsum dolor sit amet consectetur. Massa ipsum
            quam amet amet mi odio temporLorem ipsum dolor sit amet consectetur.
            Massa ipsum quam amet amet mi odio tempor
          </p>
          <button className="bg-jadaad-blue rounded-md min-w-[155px] min-h-[52px] mt-[45px] md:text-lg text-sm font-normal text-center text-white">
            Read More
          </button>
        </div>
      </div>
      <img
        className="2xl:absolute mt-0 px-2 right-[100px]"
        src={GIRL_TYPING_PIC}
        width={648}
        height={423}
        alt="A lady typing"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
