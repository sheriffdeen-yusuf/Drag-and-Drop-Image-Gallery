import React from "react";

function index() {
  return (
    <div className="relative">
      <header className="z-30 bg-stone-100 p-4 w-full fixed top-0 left-0 flex justify-around">
        <h1>Draggize</h1>
        <h1>Contact us</h1>
      </header>
      <div
        className="relative h-[20rem] bg-cover bg-center"
        style={{ backgroundImage: `url("/flower.jpg")` }}
      ></div>
      <div className="flex justify-center items-center z-20 bg-black bg-opacity-10 w-full h-[20rem] absolute inset-0 ">
        <div>
          <input
            placeholder="search"
            type="text"
            className="w-[600px] rounded-full px-4 py-2.5 focus:outline-none focus:ring focus:ring-amber-600 focus:ring-offset-4 "
          />
        </div>
      </div>
      {/* main */}
      <main className="bg-red-300 px-20 py-8 w-full">
        <div className="grid gap-6 grid-cols-3">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="p-20 bg-green-400">
              jj
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default index;
