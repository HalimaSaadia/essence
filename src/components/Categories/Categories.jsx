import React, { useEffect, useState } from 'react';
import SectionHeading from '../../shared/SectionHeading/SectionHeading';

const Categories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [products]);
    return (
        <div className="py-20">
        <SectionHeading text="Shop All Categories"/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-10">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="card md:card-side bg-base-100 shadow-xl rounded-none"
          >
            <figure>
              <img
                src={product?.image}
                alt="Album"
                className="h-full object-fill"
              />
            </figure>
            <div className="card-body p-0 px-4 md:w-11/12  justify-center border bg-[#D4D6D6]">
              <div className="py-5 md:py-0">
                <h2 className="card-title font-bold">{product?.category}</h2>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Categories;