import React, { useState, useEffect, useRef } from "react";
import { FaClipboard } from "react-icons/fa";

const HomePage = () => {
  const [length, setLength] = useState(0);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [notification, setNotification] = useState("");

  const cleanUp = () => {
    setNumAllowed(false);
    setCharAllowed(false);
    setLength(0);
  };

  useEffect(() => {
    const generateRandomPassword = (length) => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let password = "";
      let index;
      if (numAllowed) str = str + "0123456789";

      if (charAllowed) str = str + "!@#$%^&*-_+=[]{}~`";

      for (let i = 1; i <= length; i++) {
        index = Math.floor(Math.random() * str.length);
        password = password + str[index];
      }
      setPassword(password);
    };
    generateRandomPassword(length);
  }, [charAllowed, numAllowed, length]);

  const handleCopy = () => {
    setNotification(passwordRef.current.value);

    setTimeout(() => {
      setNotification("");
    }, 3000);

    cleanUp();
  };

  return (
    <div className="bg-black h-screen overflow-x-hidden flex flex-col items-center md:justify-center  gap-8 relative  ">
      <h1 className="text-white md:text-4xl font-bold text-center text-3xl py-4">
        Password Generator
      </h1>
      <div className="md:bg-blue-950 md:w-[600px] shadow-xl  w-full   flex flex-col  gap-4 md:p-5 p-3 rounded-lg">
        <div className=" flex w-full">
          <input
            type="text"
            ref={passwordRef}
            name="password"
            className="py-3 px-3 w-full   text-2xl focus:outline-none rounded-lg rounded-r-none text-yellow-600 font-semibold "
            value={password}
          />
          <button
            className="bg-blue-700 text-white py-3 text-xl px-3 font-semibold rounded-lg rounded-l-none hover:bg-blue-900"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex  gap-4 md:flex-row flex-col items-center md:pt-0 pt-8  ">
          <div className="flex gap-2">
            <input
              type="range"
              min={0}
              max={99}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              name="passwordLength"
              value={length}
            />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">
              Lenght({length})
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={numAllowed}
              onChange={(e) => {
                setNumAllowed(e.target.checked);
              }}
            />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">
              Numbers
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              className="w-4 h-4"
              onChange={(e) => {
                setCharAllowed(e.target.checked);
              }}
            />
            <span className="text-yellow-600 font-medium md:text-xl text-2xl">
              Characters
            </span>
          </div>
        </div>
      </div>

      {notification && (
        <div className="bg-white py-4 md:px-8 px-4 rounded-lg absolute md:bottom-[85%]  bottom-[15%] shadow-xl ">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold">Password Copied !</p>
            <span className="text-3xl">
              <FaClipboard />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
