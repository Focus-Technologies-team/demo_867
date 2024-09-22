import WhatWeOffer from "./WhatWeOffer";

export default function Offers() {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col justify-center items-center gap-[54px] bg-white">
        <p className="font-normal md:text-5xl text-4xl text-black">
          What We Offer
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[36px] px-8">
          <WhatWeOffer title="Financial Consulting" />
          <WhatWeOffer title="Trades and Stocks" />
          <WhatWeOffer title="Strategy Planning" />
        </div>
      </div>
    </div>
  );
}
