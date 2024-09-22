import TipSection from "../components/TipSection";
import GetStarted from "./GetStarted";
import OurMission from "./OurMission";
import ReachOut from "./ReachOut";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import LatestNews from "./LatestNews";
import Offers from "./Offers";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
export default function MainContent() {
  return (
    <main className="w-full h-full">
      <GetStarted />
      <div className="-translate-y-9">
        <div className="mx-auto bg-white min-h-[287px] py-12 px-[82px] max-w-[1384px] rounded-t-[20px] md:rounded-[20px]">
          <div className="w-full flex gap-12 xl:flex-nowrap flex-wrap justify-center items-center px-[82px]">
            <TipSection title="Valuable Insights" />
            <TipSection title="Quality Services" />
            <TipSection title="Support 24/7" />
          </div>
        </div>
      </div>
      <OurMission />
      <Offers />
      <ReachOut />
      <LatestNews />
      <FrequentlyAskedQuestions />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
