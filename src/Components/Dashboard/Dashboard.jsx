import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import modalImage from "../../assets/image/Group.png";
import { getStoredCurtList, getStoredWishList } from "../../Utility/Utility";
import CartCard from "../CurtAndWishCard/CartCard";
import WishCard from "../CurtAndWishCard/WishCard";

export default function Dashboard() {
  const [curtList, setCurtList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedCurtList = getStoredCurtList();
    const storedCurtListInt = storedCurtList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedCurtListInt.includes(book.product_id)
    );

    setCurtList(readBookList);
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.product_id)
    );
    setWishList(wishBookList);
  }, []);

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Low-High, Ascending order") {
      const sortedCurtList = [...curtList].sort((a, b) => a.price - b.price);
      setCurtList(sortedCurtList);
    }

    if (sortType === "High-Low, Descending order") {
      const sortedCurtList = [...curtList].sort((a, b) => b.price - a.price);
      setCurtList(sortedCurtList);
    }
  };

  useEffect(() => {
    const totalPrices = curtList.reduce((total, p) => total + p.price, 0);
    setTotalPrice(totalPrices);
  }, [curtList]);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const handleRefresh = () => {
    navigate(`/dashboard`);
  };

  const handlePurchase = () => {
    const storedListStr = JSON.stringify([]);
    localStorage.setItem("curt-list", storedListStr);
  };

  const openModal = () => {
    if (curtList.length === 0) {
      return;
    }
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="md:min-h-[600px] min-h-[400px]  ">
      <Helmet>
        <title>Dashboard | Gadget Pookie</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <nav className="h-44  bg-gradient-to-b  from-[#64109c] via-[#d084fe] to-[#70cfff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%]  lg:w-[70%] mx auto">
          Dashboard
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          All your added cart product and wish list product available here.
        </p>
      </nav>
      <div className="flex  -mt-24 bg-transparent max-w-6xl mx-auto">
        <Tabs
          onSelect={handleTabSelect}
          className="flex flex-col w-full bg-transparent"
        >
          <TabList className="flex w-[101%] gap-4  justify-center  ring-0 p-4 bg-transparent  ">
            <Tab
              onClick={() => {
                handleRefresh();
              }}
              className={`px-6 py-1 btn  rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 0
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Cart List
            </Tab>
            <Tab
              onClick={() => {
                handleRefresh();
              }}
              className={`px-6 py-1 btn  rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 1
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Wish List
            </Tab>
          </TabList>

          <TabPanel className="flex flex-col  p-4 bg-transparent">
            <div className="flex flex-col md:flex-row gap-3  justify-between md:items-center mt-4">
              <h1 className="text-lg w-fit text-gray-500 font-semibold border-2 rounded-full px-4 py-[.6rem] solid border-gray-200">
                <span className="font-bold text-xl text-[#a73cff]">
                  Total Price:
                </span>
                {" $"} {totalPrice.toFixed(2)}
              </h1>
              <div className="flex items-center gap-6">
                <div className="dropdown   rounded-xl">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn text-[#9538E2] hover:bg-[#e6c9fd86] hover:border-2 border rounded-full px-6 border-[#9538E2] hover:border-[#a231ff] solid bg-transparent m-1"
                  >
                    {sort ? `Sort by: ${sort}` : "Sort by"}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu  bg-white rounded-box z-[1] w-64 p-2 shadow"
                  >
                    <li
                      className=" bg-white hover:bg-white hover:border-[#9538E2] border-2 solid border-[#9538E2] mb-2 rounded-lg"
                      onClick={() => handleSort("Low-High, Ascending order")}
                    >
                      <a>Low-High, Ascending order</a>
                    </li>
                    <li
                      className=" bg-white hover:bg-white hover:border-[#9538E2] border-2 solid border-[#9538E2] rounded-lg"
                      onClick={() => handleSort("High-Low, Descending order")}
                    >
                      <a>High-Low, Descending order</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    disabled={curtList.length === 0}
                    onClick={() => {
                      openModal();
                      handlePurchase();
                    }}
                    className="btn  text-white  rounded-full bg-gradient-to-br  from-[#b356ff] via-[#b050ff] to-[#8cd3f6]"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            {curtList.length === 0 ? (
              <div className="flex gap-4 flex-col justify-center items-center  h-[500px]">
                <h2 className="text-5xl">Please product add to curt first</h2>
                <p>I wish You find the best product for you</p>
                <button onClick={goToHome} className="btn">
                  Go Home
                </button>
              </div>
            ) : (
              <p></p>
            )}
            {curtList.map((p) => (
              <CartCard key={p.product_id} product={p}></CartCard>
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col p-4  bg-transparent">
            {wishList.length === 0 ? (
              <div className="flex gap-4 flex-col justify-center items-center  h-[500px]">
                <h2 className="text-5xl">
                  Please add any product on your wish list first
                </h2>
                <p>I wish You find the best product for you</p>
                <button onClick={goToHome} className="btn">
                  Go Home
                </button>
              </div>
            ) : (
              <p></p>
            )}
            {wishList.map((p) => (
              <WishCard key={p.product_id} product={p}></WishCard>
            ))}
          </TabPanel>
        </Tabs>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col gap-4 justify-center bg-white p-6 rounded-lg shadow-lg">
          <img className="h-10 w-10 mx-auto" src={modalImage} alt="" />
          <h3 className="font-bold w-fit mx-auto text-lg">
            Payment Successful!
          </h3>
          <p className="text-center">Thank You for Purchasing</p>
          <p className="text-center">
            Your Total bill: ${totalPrice.toFixed(2)}
          </p>
          <div className="modal-action w-full flex justify-center">
            <form method="dialog w-full">
              <Link to="/">
                <button className="btn w-full">Close</button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
