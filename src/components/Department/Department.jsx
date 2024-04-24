import React from "react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Department = () => {
  return (
    <div className="py-10">
      <SectionHeading text="Shop by Department" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:space-y-5 mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://parspng.com/wp-content/uploads/2022/09/nutellapng.parspng.com_.png"
              alt=""
              className="h-48 w-40 flex-1 block"
            />
            <p className="text-lg font-semibold text-center mt-3">Food</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://png.pngtree.com/png-clipart/20230120/ourmid/pngtree-apple-juice-carton-png-image_6561534.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Interior</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://img.lovepik.com/free-png/20220128/lovepik-hand-painted-skin-care-products-png-image_402015466_wh1200.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Art</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/30/12/21/chocolate-2696873_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Chocolate</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/14/16/53/flowers-34592_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Plant</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Minimal</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/23/17/54/popcorn-4788367_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Snack</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Technoloy</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/20/16/beverage-1295653_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Drinks</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="flex flex-col gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/25/00/03/dove-41260_640.png"
              alt=""
              className="h-48 w-40"
            />
            <p className="text-base font-semibold text-center">Animal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
