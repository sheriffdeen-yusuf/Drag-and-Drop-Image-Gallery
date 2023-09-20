import Header from "@/components/Header";
import React from "react";

function index() {
  return (
    <div className="relative">
      <Header />
      <div
        className="h-screen bg-center bg-cover relative"
        style={{ backgroundImage: `url("/happy.jpg")` }}
      ></div>
      <div className="flex flex-col justify-center items-center z-10 inset-0 bg-black bg-opacity-30 h-screen absolute">
        <div className="space-y-4 text-center rounded-2xl shadow-md bg-opacity-80 bg-white p-4 pb-8 w-80 md:w-96 ">
          <h1 className="text-xl text-stone-700 font-semibold ">
            Login in to Drizzle
          </h1>
          <input
            type="text"
            placeholder="username"
            className="px-3 py-4 w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700 "
          />
          <input
            type="password"
            placeholder="password"
            className="px-3 py-4  w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700 "
          />
          <div>
            <button className="rounded-md py-4 w-full text-white bg-green-500 hover:bg-green-600">
              Login
            </button>
            <p className="text-xs text-stone-600 my-1">
              not a Drizzie member ?{" "}
              <span className="text-green-600 hover:underline">
                sign up here
              </span>
            </p>
          </div>
        </div>
        <div className="w-80 px-3 my-1 text-white font-light flex md:w-96 justify-between items-center">
          <h2>English &#8690; </h2>
          <div className="flex gap-2 ">
            <h2>Help</h2>
            <h2>Privacy</h2>
            <h2>Terms</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
