export default function ReachOut() {
  return (
    <div className="bg-jadaad-blue w-full mt-[109px]">
      <div className="max-w-[855px] w-full font-normal text-white flex flex-col px-[40px] md:pl-[121px]">
        <p className="md:text-4xl text-2xl leading-[50px] pb-8 pt-16">
          Feel Free to reach out to us if you have feedback
        </p>
        <p
          style={{ fontFamily: "Inter" }}
          className="md:text-2xl text-lg leading-8 pb-8"
        >
          Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi
          odio temporLorem ipsum dolor sit amet consectetur. Massa ipsum quam
          amet amet mi odio tempor
        </p>
        <div className="md:w-[447px] md:bg-white bg-none rounded-[10px] flex md:flex-row flex-col gap-2 justify-between md:items-center items-start mb-[35px]">
          <input
            className="py-[16px] w-full px-[20px] text-black md:placeholder:text-lg placeholder:text-sm placeholder:text-black outline-none md:rounded-l-[10px] rounded-l-0"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-jadaad-blue md:w-[155px] w-full h-[56px] rounded-[10px] md:text-lg text-sm text-center border border-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
