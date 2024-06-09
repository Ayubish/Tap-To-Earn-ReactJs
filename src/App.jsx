import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Task from "./pages/Task";
import Home from "./pages/Home";
import Ref from "./pages/Ref";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";

const App = () => {
  let btnStyle = "bg-fuchsia-600 rounded-md text-white p-3";
  return (
    <>
      <main className="lg:hidden w-screen p-8 container h-dvh bg-[#0a0d10] text-white overflow-scroll">
        <div className="flex gap-2 w-[80%] absolute bottom-10">
          <Link to="/ref">
            <button className={btnStyle}>
              <p>🗣Ref</p>
            </button>
          </Link>
          <Link to="/task">
            <button className={btnStyle}>
              <p>Task</p>
            </button>
          </Link>
          <Link to="/">
            <button className={btnStyle}>
              <p>Tap</p>
            </button>
          </Link>
          <Link to="/boost">
            <button className={btnStyle}>
              <p>Boost</p>
            </button>
          </Link>
          <Link to="/stats">
            <button className={btnStyle}>
              <p>stats</p>
            </button>
          </Link>
        </div>

        <Routes>
          <Route path="/ref" element={<Ref />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/boost" element={<Boost />}></Route>
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
