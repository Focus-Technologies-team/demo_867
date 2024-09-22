import { GOOGLE_PLAY_IMG, APP_STORE_IMG } from "../constants";

export default function GetStarted() {
  return (
    <div className="bg-[url('/bg-img.png')] bg-no-repeat bg-cover w-full min-h-[853px]">
      <div className="md:pt-[185px] pt-[92px] flex flex-col items-center md:px-[176px] px-[10px]">
        <p className="font-normal md:text-5xl text-4xl text-white text-left">
          Power your Growth: Innovative solutions for a brighter Future
        </p>
        <p className="font-normal md:text-3xl text-xl text-white text-center max-w-[1130px] px-2 pt-10">
          We provide the tools, insights, and expertise to accelerate your
          growth and outpace the competition. Whether you’re a startup or an
          established enterprise, we’re here to help you achieve your goals and
          unlock new potential.
        </p>
        <button className="mt-[70px] min-w-[279px] min-h-[52px] bg-jadaad-blue text-center md:text-lg text-sm text-white font-normal rounded-md">
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
  );
}
