import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slider.css";

const BrandSlider = ({ settings }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, [brands]);
  return (
    <Slider {...settings} className={` mt-10 bg-white p-3 overflow-x-clip `}>
      {brands?.map((brand) => (
        <div key={brand?.key} className="grid justify-center w-max ">
          <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
            <img
              src={brand?.image}
              alt="Yankee Brand"
              className="h-8 w-8 rounded-full"
            />
          </div>
          <p className="font-semibold text-center mt-2">{brand?.brand}</p>
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
