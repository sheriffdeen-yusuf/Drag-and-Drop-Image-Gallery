import Header from "@/components/Header";
import Login from "@/components/Login";
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
        <Login />
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
