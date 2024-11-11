import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToStoredCurtList, removeFromWishList } from "../../Utility/Utility";
export default function WishCard({ product }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const handleRefresh = () => {
    navigate(pathname, { replace: true });
  };
  const handleAddToAddCurt = (id) => {
    addToStoredCurtList(id);
  };
  const handleRemoveProduct = (id) => {
    removeFromWishList(id);
  };
  const [rating, setRating] = useState(product.rating);

  return (
    <div>
      <div className="mb-4 mt-6 flex flex-col md:flex-row border solid border-gray-400 rounded-xl p-4">
        <img
          className="w-[100%] h-72  md:w-[25%] object-cover rounded-xl"
          src={product.product_image}
          alt=""
        />
        <div className="md:pl-12 flex flex-col md:px-6 pt-4 md:pt-0 my-0 w-full">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{product.product_title}</h2>
            <div className="flex justify-start flex-grow-0 my-2 gap-6 overflow-x-auto whitespace-nowrap">
              <Link Link to="/dashboard">
                <button
                  onClick={() => handleRemoveProduct(product.product_id)}
                  className="text-3xl  rounded-full p-0 m-0 font-semibold hover:red-500 text-red-500 bg-white"
                >
                  <MdDeleteForever />
                </button>
              </Link>
            </div>
          </div>

          <h2 className="my-1">
            <span className="mr-2 font-semibold">Price: </span> {product.price}
          </h2>
          <h2 className="my-1">
            {" "}
            <span className="mr-2 font-semibold">
              Description:Rating:{" "}
            </span>{" "}
            {product.description}
          </h2>
          <h2 className="my-1  font-semibold flex items-center justify-start">
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
          <div className="flex justify-start items-center flex-grow my-2 gap-6 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => {
                handleAddToAddCurt(product.product_id);
                handleRemoveProduct(product.product_id);
                handleRefresh();
              }}
              className="btn  text-white  rounded-full bg-gradient-to-br  from-[#b356ff] via-[#b050ff] to-[#8cd3f6]"
              disabled={!product.availability}
            >
              {product.availability ? (
                <span className="flex">
                  <IoMdCart className="mr-2" /> Add To Cart
                </span>
              ) : (
                "Out Of Stock"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
