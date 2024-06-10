import { Link } from "react-router-dom";

import React from "react";

function LinkBtn({ label, to }) {
  return (
    <Link to={to}>
      <button className="bg-fuchsia-600 rounded-md text-white p-3">
        <p>{label}</p>
      </button>
    </Link>
  );
}

const Menu = () => {
  return (
    <div className="flex w-[80%] absolute bottom-10 justify-between">
      <LinkBtn label="Ref" to="/ref" />
      <LinkBtn label="Task" to="/task" />
      <LinkBtn label="Tap" to="/" />
      <LinkBtn label="Boost" to="/boost" />
      <LinkBtn label="Stats" to="/stats" />
    </div>
  );
};

export default Menu;
