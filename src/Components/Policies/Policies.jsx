import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
export default function Policies() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="mt-[5.5rem]">
      <Helmet>
        <title>Policies | Gadget Pookie</title>
        <meta name="description" content="Statistics" />
      </Helmet>
      <nav className="h-72 md:h-44  bg-gradient-to-b  from-[#64109c] via-[#d084fe] to-[#70cfff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%]  lg:w-[70%] mx auto">
          Policies
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          See the our All policy.
        </p>
      </nav>
      <div className="flex -mt-52  md:-mt-24 bg-transparent max-w-6xl mx-auto">
        <Tabs
          onSelect={handleTabSelect}
          className="flex flex-col w-full bg-transparent"
        >
          <TabList className="flex flex-col md:flex-row items-center   w-[101%] gap-2 md:gap-4  justify-center  ring-0 p-4 bg-transparent  ">
            <Tab
              className={`px-6 py-1 btn w-fit rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 0
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Warranty Policy
            </Tab>
            <Tab
              className={`px-6 py-1 btn  w-fit rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 1
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Return Policy
            </Tab>
            <Tab
              className={`px-6 py-1 btn w-fit rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 2
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Refund Policy
            </Tab>
          </TabList>

          <TabPanel className=" pt-6 bg-transparent">
            <div className="flex flex-col md:py-40 py-12 items-center ">
              <h1 className="text-3xl font-semibold text-center">
                Warranty Policy
              </h1>
              <p className="text-gray-600 pt-6 w-[90%] md:w-[70%]">
                Our warranty policy guarantees that the product will be free
                from defects in material and workmanship for a specified period
                from the date of purchase. If any defect is found, we will offer
                a replacement or repair at no additional cost.
              </p>
            </div>
          </TabPanel>
          <TabPanel className="  bg-transparent">
            <div className="flex flex-col md:py-40 py-12 items-center ">
              <h1 className="text-3xl font-semibold text-center">
                Return Policy
              </h1>
              <p className="text-gray-600 pt-6 w-[90%] md:w-[70%]">
                We accept returns within 30 days of purchase. To be eligible for
                a return, the product must be in its original condition, unused,
                and in the original packaging. Please provide the receipt or
                proof of purchase.
              </p>
            </div>
          </TabPanel>
          <TabPanel className="   bg-transparent">
            <div className="flex flex-col md:py-40 py-12 items-center ">
              <h1 className="text-3xl font-semibold text-center">
                Refund Policy
              </h1>
              <p className="text-gray-600 pt-6 w-[90%] md:w-[70%]">
                If a product is returned and deemed eligible, a full refund will
                be issued to the original payment method within 7-10 business
                days. The refund process may vary depending on the payment
                method used
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
