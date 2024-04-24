import "./App.css";
import Vendors from "./components/BrandVendors/Vendors";
import Categories from "./components/Categories/Categories";
import Deals from "./components/Deals/Deals";
import Department from "./components/Department/Department";
import HeroSection from "./components/HeroSection/HeroSection";
import MegaOffer from "./components/MegaOffer/MegaOffer";
import MostViewed from "./components/MostViewd/MostViewed";
import OnSell from "./components/OnSell/OnSell";
import TopBrands from "./components/TopBrands/TopBrands";
import AppleProducts from "./components/appleProducts/AppleProducts";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F1F0EE] min-h-lvh">
      <Navbar />
      <div className="max-w-7xl mx-auto p-3 md:p-5 xl:p-0 p">
        <HeroSection />
        <Department />
        <Deals />
        <OnSell />
        <MegaOffer />
        <AppleProducts />
        <Categories />
        <MostViewed />
        <TopBrands />
        <Vendors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
