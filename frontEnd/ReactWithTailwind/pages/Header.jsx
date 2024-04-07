import "../style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [dropToggle, setdropToggle] = useState(true);
  let dropSymb = <span className="caret">&#9658;</span>; // Up arrow for open state
  if (!dropToggle) {
    dropSymb = <span className="caret">&#9660;</span>; // Down arrow for closed state
  }

  return (
    <div className="navbar   z-4 absolute  w-full px-10">
      <nav className="flex justify-between items-center  p-5">
        <Link to={"/"}>
          <div className="left">
            <h1 className="text-2xl font-extrabold">AgroGuide</h1>
          </div>
        </Link>
        <div className="right  flex items-center gap-4">
          <a href="#mission">About</a>
          <a href="#explore">Initiative</a>
          <a href="#contact">Contact Us</a>

          <div className="dropdown">
            <button
              className="bg-orange-400 p-2 rounded-lg first-letter:text-xl text-white hover:bg-orange-300 font-extrabold"
              onClick={() => setdropToggle((prev) => (prev = !prev))}
            >
              Explore <span className="caret">{dropSymb}</span>
            </button>

            <div
              className={`${
                dropToggle == true ? "hidden" : null
              } dropdown-content  absolute flex flex-col  gap-1  border-2 border-gray-600 rounded p-2  text-white`}
            >
              <Link to="/summer" className="bg-gray-600 p-2 rounded">
                Summer
              </Link>
              <Link to="/winter" className="bg-gray-600 p-2  rounded">
                Winter
              </Link>
              <Link to="/spring" className="bg-gray-600 p-2  rounded">
                Spring
              </Link>
              <div className="bg-red-400 w-full"></div>
              {/* ...Add other seasons */}
            </div>
          </div>
          <div className="md:hidden text-white">hi</div>
        </div>
      </nav>
    </div>
  );
}
