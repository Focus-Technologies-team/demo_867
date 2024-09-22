import ManagementTab from "./ManagementTab";

export default function LatestNews() {
  return (
    <div>
      <p className="font-normal md:text-5xl text-4xl text-center mb-[46px] mt-[85px]">
        Our Latest News
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[43px] mb-[100px] md:px-[125px] px-[62px]">
        <ManagementTab />
      </div>
    </div>
  );
}
