import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
export default function Root() {
  const scrollToTopStyle = {
    backgroundColor: "#e0aeff",
  };
  return (
    <div className="  ">
      <div className="-ml-10 lg:-ml-8 xl:ml-10 mx-auto">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop
        smooth
        style={scrollToTopStyle}
        className={` rounded-xl w-12 h-12 flex justify-center items-center`}
      />
    </div>
  );
}
