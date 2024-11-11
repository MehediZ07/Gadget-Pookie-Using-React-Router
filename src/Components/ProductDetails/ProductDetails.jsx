import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  addToStoredCurtList,
  addToStoredWishList,
} from "../../Utility/Utility";

import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ProductDetails() {
  const { id } = useParams();

  const data = useLoaderData();

  const product = data.find((e) => e.product_id === parseInt(id));

  const handleAddToAddCurt = (id) => {
    addToStoredCurtList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate(`/Details/${id}`);
  };

  const [stepsBack, setStepsBack] = useState(1);
  const handleCount = () => {
    setStepsBack(stepsBack + 1);
  };

  const handleGoBack = () => {
    navigate(-stepsBack);
  };

  const [added, setAdded] = useState(true);

  const handleAddedWish = () => {
    setAdded(false);
  };

  const [rating, setRating] = useState(product.rating);

  return (
    <div className="min-h-[600px]">
      <nav className="h-56  bg-gradient-to-b from-[#64109c] via-[#d084fe] to-[#a8e2ff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%]  lg:w-[70%] mx auto">
          Product Details
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          All type of information available here, you can see details if this
          product, so you can bay easily according to your requirements.
        </p>
      </nav>

      <div className="w-[90%] md:w-[70%] bg-white flex flex-col md:flex-row -mt-24 gap-4 lg:w-[55%] border-2 mb-12 solid border-gray-200 rounded-xl p-4 max-w-7xl  mx-auto">
        <div className="md:w-[35%] w-[100%] rounded-xl border-2 solid border-gray-100">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={product.product_image}
            alt=""
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <h1 className="text-xl font-semibold">{product.product_title}</h1>
          <p className="text-sm text-gray-700">Price: ${product.price}</p>
          {product.availability ? (
            <button className="btn btn-xs w-fit rounded-full border border-green-500 solid bg-green-50 text-green-500">
              In stoke
            </button>
          ) : (
            <button className="btn btn-xs w-fit rounded-full border border-red-400 solid bg-red-50 text-red-400">
              Out of stock
            </button>
          )}
          <p className="text-sm text-gray-700">
            Description: {product.description}
          </p>
          <p className="text-sm text-black font-semibold">Specification</p>
          <ol className="-mt-2 space-y-1">
            {product.specification.map((p) => (
              <li className="text-xs ml-6  text-gray-500 list-decimal">{p}</li>
            ))}
          </ol>
          <h2 className="my-3 font-semibold flex items-center justify-start">
            <span className="mr-2 font-semibold">Rating: </span>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffcc26"
              value={rating}
              onChange={(newRating) => setRating(newRating)}
            />
          </h2>

          <div className="flex flex-grow gap-4 justify-start items-center">
            <button
              onClick={() => {
                handleAddToAddCurt(id);
                handleRefresh();
                handleCount();
              }}
              disabled={!product.availability}
              className="btn md:text-lg text-white bg-gradient-to-r   from-[#9538E2] via-{#e0aeff} to-[#68cdff] "
            >
              <IoMdCart />
              Add to Cart
            </button>
            <button
              disabled={!added}
              onClick={() => {
                handleAddToWishList(id);
                handleRefresh();
                handleAddedWish();
                handleCount();
              }}
              className="btn text-2xl text-white btn-secondary"
            >
              <FaRegHeart></FaRegHeart>
            </button>
            <button
              onClick={() => {
                handleGoBack();
              }}
              className="btn btn-outline text-lg"
            >
              <RiArrowGoBackLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
