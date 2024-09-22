import TestimonialTab from "./TestimonialTab";

export default function Testimonials() {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center w-full md:px-[100px] px-[50px]">
      <p className="font-normal md:text-5xl text-4xl text-center mb-[40px]">
        Testimonials
      </p>
      <div className="flex xl:flex-nowrap flex-wrap justify-center gap-11">
        <TestimonialTab />
        <TestimonialTab />
        <TestimonialTab />
      </div>
    </div>
  );
}
