import { LARA_PROFILE } from "../constants";

export default function TestimonialTab() {
  return (
    <div className="rounded-[20px] max-w-[464px] flex justify-center items-center bg-[#54C5F933]">
      <div className="flex flex-col justify-start py-10 px-6">
        <div className="flex gap-5">
          <div>
            <img
              src={LARA_PROFILE}
              width={70}
              height={70}
              alt="profile pic"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col gap-3 font-normal">
            <p className="text-lg">Lara Angel</p>
            <p className="text-sm">Entrepreneur</p>
          </div>
        </div>
        <div className="mt-[40px] flex flex-col gap-5">
          <p className="text-[18px]">Strategy Planning</p>
          <p style={{ fontFamily: "Inter" }} className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
            mi odio tempor. Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur. Massa ipsum quam amet amet mi odi
          </p>
        </div>
      </div>
    </div>
  );
}
