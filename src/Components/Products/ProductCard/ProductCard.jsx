import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  addToStoredCurtList,
  addToStoredWishList,
  getStoredWishList,
} from "../../../Utility/Utility";

export default function ProductCard({ product }) {
  const handleAddToAddCurt = (id) => {
    addToStoredCurtList(id);
  };
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  const [added, setAdded] = useState(false);
  const handleAddedWish = () => {
    setAdded(true);
  };

  useEffect(() => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(product.product_id)) {
      setAdded(true);
    }
  }, []);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleRefresh = () => {
    navigate(`${pathname}`);
  };

  return (
    <div className="border-2 ml-6 solid border-gray-200 rounded-lg md:p-4 lg:p-6 mb-6">
      <img
        className=" object-cover w-full p-4 mb-4 md:p-0 rounded-lg h-64"
        src={product.product_image}
        alt=""
      />
      <div className="text-start px-4 md:px-0 pb-4 space-y-2 md:pb-0">
        <h1 className=" font-bold">{product.product_title}</h1>
        <p className="text-sm text-gray-700">Price: ${product.price}</p>
        <NavLink
          to={`/Details/${product.product_id}`}
          className="btn btn-outline btn-info"
        >
          Details
        </NavLink>
      </div>
      <div className="flex mt-4 gap-4">
        <button
          onClick={() => {
            handleAddToAddCurt(product.product_id);
            handleRefresh();
            // handleCount();
          }}
          disabled={!product.availability}
          className="btn md:text-lg text-white bg-gradient-to-r   from-[#9538E2] via-{#e0aeff} to-[#68cdff] "
        >
          {product.availability ? (
            <span className="flex items-center">
              <IoMdCart className="mr-2" /> Add To Cart
            </span>
          ) : (
            "Out Of Stock"
          )}
        </button>
        <button
          disabled={added}
          onClick={() => {
            handleAddToWishList(product.product_id);
            handleRefresh();
            handleAddedWish();
          }}
          className="btn text-2xl text-white btn-secondary"
        >
          <FaRegHeart></FaRegHeart>
        </button>
      </div>
    </div>
  );
}
