import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { SessionContext } from "../context/Session";
export default function Header() {
  const { session, setSession } = useContext(SessionContext);

  const [dropToggle, setdropToggle] = useState(true);
  let dropSymb = <span className="caret">&#9658;</span>; // Up arrow for open state
  if (!dropToggle) {
    dropSymb = <span className="caret">&#9660;</span>; // Down arrow for closed state
  }
  const handelLogOut = () => {
    setSession(null);
  };

  return (
    <div className="navbar z-10 absolute   w-full px-10">
      <nav className="flex  justify-between h-[100px] items-center  p-5">
        <Link to={"/"}>
          <div className="left">
            <h1 className="text-2xl text-white font-extrabold">AgroGuide</h1>
          </div>
        </Link>


        <div className="right  flex items-center gap-4">
      
      
          



          {session ? (
            <div className="dropdown">
              <button
                className="bg-green-600 p-2 rounded-lg first-letter:text-xl text-white hover:bg-green-500 font-extrabold"
                onClick={() => setdropToggle((prev) => (prev = !prev))}
              >
                {session.username} <span className="caret">{dropSymb}</span>
              </button>

              <div
                className={`${
                  dropToggle == true ? "hidden" : null
                } dropdown-content  absolute flex flex-col  gap-1  border-2 border-gray-600 rounded p-2  text-white`}
              >
                <Link to="/profile" className={`bg-gray-600 ${session.role == 0 ?'hidden':'' } p-2 rounded`}>
                  Profile
                </Link>
                <Link to="/" className="bg-gray-600 p-2  rounded" onClick={handelLogOut}>
                  LogOut
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-green-400 p-1 px-2 rounded-md first-letter:text-xl text-white hover:bg-green-300 font-extrabold">
                Login
              </button>
            </Link>
          )}
          
        </div>
      </nav>
    </div>
  );
}
