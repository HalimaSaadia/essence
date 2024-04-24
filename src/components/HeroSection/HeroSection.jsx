import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary";
import Carousel from "./Carousel";
import { BsPatchCheckFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4 lg:col-span-2 bg-white p-4 lg:order-first">
          <ul>
            <li className="py-3 cursor-pointer">All Categories</li>
            <li className="py-3 cursor-pointer">Cart & Motorcycles</li>
            <li className="py-3 cursor-pointer">Music & Books</li>
            <li className="py-3 cursor-pointer">Art & Craft</li>
            <li className="py-3 cursor-pointer">Home And Garden</li>
            <li className="py-3 cursor-pointer">Moms And Babies</li>
            <li className="py-3 cursor-pointer">Electronics</li>
            <li className="py-3 cursor-pointer">Kids & Toys</li>
            <li className="py-3 cursor-pointer">Clothing And Shoes</li>
            <li className="py-3 cursor-pointer">Beauty And Health</li>
            <li className="py-3 cursor-pointer">Sports</li>
          </ul>
        </div>
        <div className="lg:col-span-7 col-span-12 md:col-span-12 order-first ">
          <Carousel />
        </div>{" "}
        <div className="col-span-12 lg:col-span-3 md:col-span-8 bg-white p-5">
          <div className="logo-font">
            <p>Good Afternoon, Halima</p>
            <div className="text-center my-3">
              <h5 className="font-bold">Flash Sale for you</h5>
              <h1>
                <span className="text-[80px] logo-font text-semibold text-primaryColor">
                  40
                </span>
                <sub className="logo-font text-semibold text-primaryColor text-lg">
                  %off
                </sub>
              </h1>
            </div>
            <p>
              After 12 hrs, offer will be end,{" "}
              <span className="text-semibold text-primaryColor cursor-pointer">
                Get Now
              </span>
            </p>
          </div>

          <div className="mt-4">
            <img
              src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="my-2"
            />
            <ButtonPrimary width="full" text="Buy Now" />
          </div>
        </div>
      </div>

      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="bg-white px-3 py-3 flex items-center gap-5">
          <BsPatchCheckFill style={{color:"#F6B100"}} className="text-2xl"/>
          <div>
            <p className="font-bold">Quick & Easy Store Pickup</p>
            <p className="textNeutral font-semibold">Get your order as little as 1hr</p>
          </div>
        </div>
        <div className="bg-white px-3 py-3 flex items-center gap-5">
          <BsPatchCheckFill style={{color:"#F6B100"}} className="text-2xl"/>
          <div>
            <p className="font-bold">Low Price Guarantee</p>
            <p className="textNeutral font-semibold">We won’t be beat on price</p>
          </div>
        </div>
        <div className="bg-white px-3 py-3 flex items-center gap-5">
          <BsPatchCheckFill style={{color:"#F6B100"}} className="text-2xl"/>
          <div>
            <p className="font-bold">Lates & Greatest Tech</p>
            <p className="textNeutral font-semibold">Discover whats new & excitings</p>
          </div>
        </div>
        <div className="bg-white px-3 py-3 flex items-center gap-5">
          <BsPatchCheckFill style={{color:"#F6B100"}} className="text-2xl"/>
          <div>
            <p className="font-bold">Knowledgeable Advice</p>
            <p className="textNeutral font-semibold">Answer to your tech questions</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HeroSection;
