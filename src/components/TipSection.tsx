export default function TipSection({ title }: { title: string }) {
  return (
    <div className="flex flex-shrink gap-[20px] md:gap-[47px]">
      <div className="min-w-[5px] min-w-h-[133px] bg-[#279AED] mt-[56px] rounded-[5px]"></div>
      <div className="flex flex-col w-[322px] gap-[16px]">
        <p className="font-bold text-lg">{title}</p>
        <p
          style={{ fontFamily: "Inter" }}
          className="leading-[30px] text-sm"
        >
          Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi
          odio tempor Lorem ipsum dolor sit amet consectetur. Massa ipsum quam
          amet amet mi odio tempor
        </p>
      </div>
    </div>
  );
}
