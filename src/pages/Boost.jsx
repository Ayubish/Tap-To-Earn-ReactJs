import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TaskPanel from "../components/TaskPanel";

function InfoBox({ heading, children, price, handle }) {
  return (
    <div
      className={`absolute info-alert z-50 justify-center rounded-lg shadow-lg text-center gap-4 p-5 bottom-0 left-0 right-0 bg-cyan-500`}
    >
      <h2>{heading}</h2>
      <h2>{children}</h2>
      <h3>💰{price}</h3>
      <Link to="/">
        <button
          onClick={handle}
          className="py-3 px-10 my-4 bg-violet-700 rounded-lg"
        >
          Get It
        </button>
      </Link>
    </div>
  );
}

const Boost = ({ earn, setEarn, turboBg, setTurboBg }) => {
  const [alert, setAlert] = useState(null);
  return (
    <>
      <div className="h-[90%] grid gap-7 relative">
        <h2>Earn More with Boosts</h2>
        <div className="flex justify-between">
          <button onClick={turbo} className={`${turboBg} p-6 rounded-md`}>
            <h2>⚡Turbo</h2>
            <p>x5</p>
            <p>{earn.boost}/3 boost</p>
          </button>
          <button onClick={tank} className="p-6 bg-indigo-700 rounded-md">
            <h2>⛽</h2>
            <h2>Full Tank</h2>
          </button>
        </div>

        <div className="h-[90%] overflow-scroll no-scrollbar">
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
        </div>
      </div>
      {alert}
    </>
  );

  function turbo() {
    if (earn.boost) {
      setAlert(
        <InfoBox heading={"x5 Boost"} price="FREE" handle={handleBoost}>
          Earn faster with 5 times speed!
        </InfoBox>
      );
    }
  }
  function tank() {
    if (earn.boost) {
      setAlert(
        <InfoBox heading={"Daily Full Tank"} price="FREE" handle={handleTank}>
          Full your tank to the maximum!
        </InfoBox>
      );
    }
  }
  function handleTank() {
    const newEarn = { ...earn };
    newEarn.leftCapacity = newEarn.maxCapacity;
    setEarn(newEarn);
  }

  function handleBoost() {
    //setAlert(null);
    if (earn.boost <= 1) {
      setTurboBg("bg-gray-500");
    }
    const newEarn = { ...earn };
    newEarn.perClick *= 5;
    newEarn.boost -= 1;
    setTimeout(() => {
      newEarn.perClick = earn.perClick;
    }, 10000);
    setEarn(newEarn);
  }
};

export default Boost;
