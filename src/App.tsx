import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
