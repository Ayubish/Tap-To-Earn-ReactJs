import { useState, useRef } from "react";
import coin from "../assets/coin.png";

const Home = () => {
  const [count, setCount] = useState({
    totalEarn: 0,
    maxCapacity: 3000,
    leftCapacity: 3000,
    leftPercentage: 100,
  });
  const divRef = useRef(null);
  const progressFill = useRef(null);
  const [earn, setearn] = useState({
    perClick: 2,
    boost: 3,
  });
  const boostRef = useRef(null);
  return (
    <>
      <div className="w-[100%] h-[90%] grid justify-items-center gap-3">
        <div className="flex h-10 gap-3">
          <img src={coin} alt="trophy" className="max-[100%]" />
          <h2 className="text-4xl text-center font-semibold">
            {count.totalEarn}
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
          ⚡{count.leftCapacity} / {count.maxCapacity}
        </p>
        <div className="w-[100%] h-4 bg-white rounded-xl">
          <div ref={progressFill} className="h-4 bg-blue-500 rounded-xl"></div>
        </div>

        {/* <button
          ref={boostRef}
          onClick={handleBoost}
          className="bg-blue-500 py-3 px-10 text-white shadow-lg text-3xl"
        >
          {earn.boost} Boosts
        </button> */}
      </div>
    </>
  );

  //Touch Handling

  function handleTouch(e) {
    e.preventDefault;
    const newCount = { ...count };
    newCount.leftCapacity--;
    newCount.totalEarn++;
    progressFill.current.style.width = `${
      (count.leftCapacity / count.maxCapacity) * 100
    }%`;

    setCount(newCount);
    const touch = [...e.changedTouches][0];
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
  }

  //Boost Handiling
  function handleBoost() {
    if (earn.boost) {
      const newEarn = { ...earn };
      newEarn.perClick *= 5;
      newEarn.boost -= 1;
      setTimeout(() => {
        newEarn.perClick = earn.perClick;
      }, 5000);
      setearn(newEarn);
      if (earn.boost <= 1) {
        boostRef.current.style.background = "gray";
      }
    } else {
      alert("No available boost!");
    }
  }
};

export default Home;
