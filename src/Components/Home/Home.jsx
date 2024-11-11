import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import HomeBanner from "./HomeBanner/HomeBanner";
export default function Home() {
  const categories = useLoaderData();

  return (
    <div className="mt-12 -mx-5 ">
      <Helmet>
        <title>{`Home | Gadget Pookie`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <HomeBanner></HomeBanner>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 px-2 max-w-7xl mx-auto">
        <div className="flex flex-row md:flex-col flex-wrap mb-4 md:mb-0 ml-6  gap-4 justify-center items-center sticky py-8 md:pt-0 top-0 md:top-20 h-fit bg-white mx-2 px-2 pb-2 rounded-lg">
          <NavLink
            to={`/Product/all`}
            className="btn btn-outline text-xs rounded-full w-fit md:w-36  border-2 md:text-base  btn-info"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(to right, #9538E2, #8cd2f6)",
                  }
                : { fontWeight: "600", background: "white", color: "#68cdff" }
            }
          >
            All Products
          </NavLink>
          {categories.map((c) => (
            <NavLink
              className="btn btn-outline text-xs w-fit md:w-36 rounded-full  border-2 md:text-base btn-info"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "600",
                      color: "white",
                      background: "linear-gradient(to right, #9538E2, #8cd2f6)",
                    }
                  : { fontWeight: "600", background: "white", color: "#68cdff" }
              }
              key={c.category_id}
              to={`/Product/${c.category_name}`}
            >
              {c.category_name}
            </NavLink>
          ))}
        </div>

        <div className="col-span-1 h-fit  md:col-span-4 lg:col-span-6  ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
