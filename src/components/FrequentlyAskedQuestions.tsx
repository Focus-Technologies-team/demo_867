import { RIGHT_ARROW } from "../constants";

export default function FrequentlyAskedQuestions() {
  return (
    <div>
      <p className="font-normal md:text-5xl text-4xl leading-[56px] text-center">
        Frequently Asked Questions
      </p>
      <div className="flex 2xl:flex-nowrap flex-wrap w-full bg-white items-center justify-center mt-[48px] px-2 md:px-[100px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center w-full min-h-[482px]">
            {[1, 2, 3, 4, 5].map((_, idx) => {
              return (
                <div
                  className="h-full flex justify-start items-center"
                  key={idx}
                >
                  <button className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-[17px] max-w-[733px] py-[24px]">
                      <div className="min-w-[30px] min-h-[30px] rounded-full bg-jadaad-blue md:ml-[19px]"></div>
                      <p className="md:text-lg text-sm font-normal">
                        How do I manage finance
                      </p>
                    </div>
                    <img
                      className="md:mr-[26px]"
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
        <div className="bg-jadaad-blue w-full flex justify-center items-center rounded-[10px]">
          <div className="pt-[87px] px-[40px] mb-[41px] text-white">
            <p className="font-normal md:text-4xl text-2xl">
              How do i manage finance?
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="md:text-2xl text-lg mt-[40px] leading-[30px] font-normal text-left text-white/90 max-w-[694px]"
            >
              Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet
              mi odio tempor. Lorem ipsum dolor sit amet consecteturLorem ipsum
              dolor sit amet consectetur. Massa ipsum quam amet amet mi odio
              tempor. Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
              sit amet consectetur. Massa ipsum quam amet amet mi odio tempor.
              Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
              consectetur. Massa ipsum quam amet amet mi odio tempor. Lorem
              ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
              consectetur. Massa ipsum quam amet amet mi odio tempor. Lorem
              ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
              consectetur. Massa ipsum quam amet amet mi odio tempor. Lorem
              ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
