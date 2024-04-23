import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F1F0EE] min-h-lvh">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
