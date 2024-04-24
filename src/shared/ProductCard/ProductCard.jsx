import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl rounded-none mx-2 h-full">
        <figure className="">
          <img src={product?.image} alt="Shoes" className="h-40 w-full" />
        </figure>
        <div className="card-body items-center text-center px-0">
          <h2 className="card-title text-base font-bold">
            {product?.name}
          </h2>
          <div className="">
            <Rating
              readonly
              placeholderRating={5}
              emptySymbol={<FaRegStar />}
              className="icon"
              placeholderSymbol={<FaStar style={{ color: "#F6B100" }} />}
              fullSymbol={
                <FaStar
                  style={{ color: "#F6B100", backgroundColor: "#F6B100" }}
                  className="text-secondaryColor"
                />
              }
            />
            <p className="font-semibold text-textNeutral">
              {product?.review} Review
            </p>
          </div>
          <div className="card-actions">
          <p className="my-3">
            <span className="text-lg font-bold">
              ${product?.offerPrice}
            </span>
            <span className="text-lg line-through ml-3 text-textNeutral">
              ${product?.originalPrice}
            </span>
            <span className="text-lg text-textNeutral">
              -{product?.discount}%
            </span>
          </p>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;