export default function WhatWeOffer({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex font-normal sm:w-[407px] w-full rounded-[20px] shadow-xl shadow-black/10 ${className}`}
    >
      <div className="text-[16px] py-[47px] px-[42px] flex flex-col gap-[24px]">
        <p className="text-center md:text-[20px] text-[15px]">{title}</p>
        <p style={{ fontFamily: "Inter" }} className="leading-[30px] md:text-[20px] text-[15px]">
          Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi
          Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi.{" "}
          <span className="text-[#279AED]">See More...</span>
        </p>
      </div>
    </div>
  );
}
