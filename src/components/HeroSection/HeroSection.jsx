import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2 bg-white p-4">
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
        <div className="col-span-7">
          <Carousel />
        </div>{" "}
        <div className="col-span-3 bg-white p-5">
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
    </div>
  );
};

export default HeroSection;
