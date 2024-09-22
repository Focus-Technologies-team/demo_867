import { GATHERING_IMG } from "../constants";
import WhatWeOffer from "./WhatWeOffer";

export default function ManagementTab() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={GATHERING_IMG}
          width={464}
          height={260}
          alt="conference pic"
          style={{ objectFit: "cover" }}
        />
        <WhatWeOffer className="shadow-none" title="Financial Management" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={GATHERING_IMG}
          width={464}
          height={260}
          alt="conference pic"
          style={{ objectFit: "cover" }}
        />
        <WhatWeOffer className="shadow-none" title="Financial Management" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={GATHERING_IMG}
          width={464}
          height={260}
          alt="conference pic"
          style={{ objectFit: "cover" }}
        />
        <WhatWeOffer className="shadow-none" title="Financial Management" />
      </div>
    </>
  );
}
