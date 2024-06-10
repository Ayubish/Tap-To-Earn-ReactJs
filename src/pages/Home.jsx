import { useState, useRef } from "react";
import coin from "../assets/coin1.png";

const Home = ({ earn, setEarn }) => {
  const divRef = useRef(null);
  const progressFill = useRef(null);

  return (
    <>
      <div className="w-[100%] h-[90%] grid justify-items-center gap-3">
        <div className="flex h-10 gap-3">
          <img src={coin} alt="trophy" className="max-[100%]" />
          <h2 className="text-4xl text-center font-semibold">
            {earn.totalEarn}
          </h2>
        </div>
        <h3 className="text-2xl">
          🏆Legendary <i className="fa fa-chevron-right text-sm"></i>
        </h3>

        <img
          src={coin}
          alt="coin"
          onTouchStart={(e) => handleTouch(e)}
          className="max-w-[90%] bg-blue-700 rounded-full shadow-md"
        />

        <div ref={divRef}></div>
        <p>
          ⚡{earn.leftCapacity} / {earn.maxCapacity}
        </p>
        <div className="w-[100%] h-4 bg-white rounded-xl">
          <div ref={progressFill} className="h-4 bg-blue-500 rounded-xl"></div>
        </div>
      </div>
    </>
  );

  //Touch Handling

  function handleTouch(e) {
    e.preventDefault;
    const newearn = { ...earn };
    newearn.leftCapacity -= earn.perClick;
    newearn.totalEarn += earn.perClick;
    progressFill.current.style.width = `${
      (earn.leftCapacity / earn.maxCapacity) * 100
    }%`;

    setEarn(newearn);
    [...e.changedTouches].forEach((touch) => {
      const newElem = document.createElement("h2");
      newElem.textContent = `+${earn.perClick}`;
      newElem.className = "floating-counter";
      newElem.style.top = `${touch.pageY}px`;
      newElem.style.left = `${touch.pageX}px`;
      divRef.current.appendChild(newElem);

      setTimeout(() => {
        if (divRef.current.firstChild) {
          divRef.current.removeChild(divRef.current.firstChild);
        }
      }, 1000);
    });
  }

  //Boost Handiling
};

export default Home;
