import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Task from "./pages/Task";
import Home from "./pages/Home";
import Ref from "./pages/Ref";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";
import Menu from "./components/Menu";

const App = () => {
  const [earn, setEarn] = useState({
    totalEarn: 0,
    maxCapacity: 3000,
    leftCapacity: 3000,
    leftPercentage: 100,
    perClick: 5,
    boost: 3,
  });
  const [turboBg, setTurboBg] = useState("bg-blue-500");
  return (
    <>
      <main className="lg:hidden w-screen p-8 container h-dvh bg-[#0a0d10] text-white overflow-scroll">
        <Menu />

        <Routes>
          <Route path="/ref" element={<Ref />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route
            path="/"
            element={<Home earn={earn} setEarn={(nEarn) => setEarn(nEarn)} />}
          ></Route>
          <Route
            path="/boost"
            element={
              <Boost
                earn={earn}
                setEarn={(nEarn) => setEarn(nEarn)}
                turboBg={turboBg}
                setTurboBg={(bg) => setTurboBg(bg)}
              />
            }
          ></Route>
          <Route path="/stats" element={<Stats />}></Route>
        </Routes>
      </main>
      <div className="hidden lg:flex w-screen h-dvh justify-center items-center font-bold bg-[#0a0d10] text-white">
        <h2 className="text-5xl">Better to use Mobile, 'Cause it Rocks!</h2>
      </div>
    </>
  );
};

export default App;
