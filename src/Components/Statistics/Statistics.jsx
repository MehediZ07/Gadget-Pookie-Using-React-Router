import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Statistics() {
  const data = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Statistics | Gadget Pookie</title>
        <meta name="description" content="Statistics" />
      </Helmet>
      <nav className="h-32  bg-gradient-to-b  from-[#64109c] via-[#d084fe] to-[#70cfff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%] pb-4 lg:w-[70%] mx auto">
          Statistics
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-100  lg:w-[50%] mx auto">
          See all the product prices comparison.
        </p>
      </nav>
      <div className="max-w-6xl mx-auto my-12 overflow-x-auto">
        <ResponsiveContainer width={70 * data.length} height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" barSize={30} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
