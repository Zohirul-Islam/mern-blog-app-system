import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* breadcrumb */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>.</span>
        <span className="text-blue-800">blogs and articles</span>
      </div>
      {/* Introduction */}
      <div className="flex flex-col gap-3 max-w-2xl items-center">
        {/* title */}
        <h1 className="text-xl sm:text-3xl font-medium text-gray-800 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          beatae.
        </h1>
        {/* des */}
        <p className="text-gray-600 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          fuga. Aut enim deleniti modi quas incidunt nam perferendis assumenda
          ratione, officiis aliquid architecto illum cumque maiores voluptas
          harum excepturi id?
        </p>
      </div>
      {/* categories */}
      <MainCategories/>
      {/* feature post */}
      {/* post list */}
    </div>
  );
};

export default Homepage;
