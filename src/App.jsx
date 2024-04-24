import "./App.css";
import Categories from "./components/Categories/Categories";
import Deals from "./components/Deals/Deals";
import Department from "./components/Department/Department";
import HeroSection from "./components/HeroSection/HeroSection";
import MegaOffer from "./components/MegaOffer/MegaOffer";
import OnSell from "./components/OnSell/OnSell";
import AppleProducts from "./components/appleProducts/AppleProducts";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F1F0EE] min-h-lvh">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <Department />
        <Deals />
        <OnSell />
        <MegaOffer />
        <AppleProducts />
        <Categories />
      </div>
    </div>
  );
}

export default App;
