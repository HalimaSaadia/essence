import "./App.css";
import Department from "./components/Department/Department";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F1F0EE] min-h-lvh">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <Department />
      </div>
    </div>
  );
}

export default App;
