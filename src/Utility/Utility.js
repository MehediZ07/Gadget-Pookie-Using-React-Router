import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredCurtList = () => {
  const storedListStr = localStorage.getItem("curt-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCurtList = (id) => {
  const storedList = getStoredCurtList();
  storedList.push(id);
  const storedListStr = JSON.stringify(storedList);
  localStorage.setItem("curt-list", storedListStr);

  toast("✅ Product added to your curt.");
};

const removeFromCurtList = (id) => {
  const curtList = JSON.parse(localStorage.getItem("curt-list"));
  const index = curtList.indexOf(id);
  if (index !== -1) {
    curtList.splice(index, 1);
    localStorage.setItem("curt-list", JSON.stringify(curtList));
    toast("❌ This Product is remove to your Cart list.");
  } else {
    return;
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast("❤️ Product Added to your wish list.");
  }
};

const removeFromWishList = (id) => {
  const wishList = JSON.parse(localStorage.getItem("wish-list"));
  const index = wishList.indexOf(id);
  if (index !== -1) {
    wishList.splice(index, 1);
    localStorage.setItem("wish-list", JSON.stringify(wishList));
    toast("❌ This Product is remove to your wish list.");
  } else {
    return;
  }
};

export {
  addToStoredCurtList,
  addToStoredWishList,
  getStoredCurtList,
  getStoredWishList,
  removeFromCurtList,
  removeFromWishList,
};
