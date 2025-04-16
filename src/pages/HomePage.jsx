import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black h-screen overflow-x-hidden flex flex-col items-center md:justify-center  gap-8   ">
      <h1 className="text-white md:text-4xl font-bold text-center text-3xl py-4">
        Password Generator
      </h1>
      <div className="md:bg-blue-950 md:w-[600px]  w-full   flex flex-col  gap-4 md:p-5 p-3 rounded-lg">
        <div className=" flex w-full">
          <input
            type="text"
            name="password"
            className="py-3 px-3 w-full   text-2xl focus:outline-none rounded-lg rounded-r-none text-yellow-600 font-semibold "
          />
          <button className="bg-blue-700 text-white py-3 text-xl px-3 font-semibold rounded-lg rounded-l-none hover:bg-blue-900">
            Copy
          </button>
        </div>
        <div className="flex  gap-4 md:flex-row flex-col items-center md:pt-0 pt-8">
          <div className="flex gap-2">
            <input type="range" min={1} max={100} />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">
              Length(12)
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">Numbers</span>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">
              Characters
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
