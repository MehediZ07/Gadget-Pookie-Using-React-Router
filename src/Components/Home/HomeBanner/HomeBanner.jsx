import { NavLink } from "react-router-dom";
import bannerImg from "../../../assets/image/HBanner.png";
export default function HomeBanner() {
  return (
    <div className=" max-w-7xl mx-auto h-[26rem]  lg:h-[33rem] -mt-[7.5rem] pt-16 w-full border-[3.5px] solid  border-gray-200 bg-gradient-to-b from-[#440071] via-[#9538E2] to-[#e0aeff]   rounded-xl lg:mb-[20rem] xl:mb-[23rem] mb-[14rem] md:mb-[18rem]">
      <div className="mx-auto mt-3 flex flex-col space-y-4">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%] md:text-3xl lg:text-5xl lg:w-[70%] mx auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <NavLink to="/dashboard" className="mx-auto">
          <button className="py-2 px-4 font-semibold mx-auto bg-white rounded-full text-[#9538E2]">
            Shop Now
          </button>
        </NavLink>
      </div>
      <div className="w-[90%] sm:w-[70%]  border border-gray-300 solid bg-white mt-12 bg-opacity-20 backdrop-blur-sm mx-auto rounded-xl mb-[10rem]">
        <div className=" m-3 md:m-6 ">
          <img
            className="w-full object-cover rounded-xl"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
