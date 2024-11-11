import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getStoredCurtList, removeFromCurtList } from "../../Utility/Utility";

export default function CartCard({ product }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const handleRefresh = () => {
    navigate(`${pathname}`);
  };

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const storedCurtList = getStoredCurtList();
    const storedCurtListInt = storedCurtList.map((id) => parseInt(id));

    const count = storedCurtListInt.filter(
      (item) => item === product.product_id
    ).length;
    setNumber(count);
    console.log(count);
  }, []);

  const handleRemoveProduct = (id) => {
    removeFromCurtList(id);
  };
  const [rating, setRating] = useState(product.rating);

  return (
    <div>
      <div className="mb-4 mt-6 flex flex-col md:flex-row border solid border-gray-400 rounded-xl p-4">
        <img
          className="w-[100%] h-52  md:w-[25%]  rounded-xl"
          src={product.product_image}
          alt=""
        />
        <div className="md:pl-12 flex flex-col px-6 md:px-0  w-full">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{product.product_title}</h2>
            <Link className="flex items-center  gap-2" to="/dashboard">
              <p className="text-xl font-medium">{number}X</p>
              <button
                onClick={() => {
                  handleRemoveProduct(product.product_id);
                  handleRefresh();
                }}
                className="text-3xl  rounded-full p-0 m-0 font-semibold hover:red-500 text-red-500 bg-white"
              >
                <MdDeleteForever />
              </button>
            </Link>
          </div>

          <h2 className="my-3">
            <span className="mr-2 font-semibold">Price: </span> {product.price}
          </h2>
          <h2 className="my-3">
            {" "}
            <span className="mr-2 font-semibold">
              Description:Rating:{" "}
            </span>{" "}
            {product.description}
          </h2>
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
        </div>
      </div>
    </div>
  );
}
