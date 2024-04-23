import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider-container logo-font">
        <Slider {...settings}>
          <div className="slideOne h-96 bg-no-repeat bg-center ">
            <div className=" h-full flex items-center">
              <div className="pl-5">
                <h2 className="md:w-[50%] text-7xl text-primaryColor font-semibold ">
                  Kitchen savings
                </h2>
               <ButtonPrimary text="Buy Now (50% off)"/>
                
              </div>
            </div>
          </div>
          <div className="slideTwo h-96 bg-no-repeat bg-center ">
            <div className=" h-full flex items-center">
              <div className="pl-5">
                <h2 className="md:w-[50%] text-7xl text-primaryColor font-semibold ">
                  Stay Healthy
                </h2>
                <ButtonPrimary text="Buy Now (50% off)"/>
                
              </div>
            </div>
          </div>
          <div className="slideThree h-96 bg-no-repeat bg-center ">
            <div className=" h-full flex items-center">
              <div className="pl-5">
                <h2 className="md:w-[50%] text-7xl text-primaryColor font-semibold ">
                  Skincare savings
                </h2>
                <ButtonPrimary text="Buy Now (50% off)"/>
                
              </div>
            </div>
          </div>
     
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
