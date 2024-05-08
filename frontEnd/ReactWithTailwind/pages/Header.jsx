import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { SessionContext } from "../context/Session";
export default function Header() {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [itemSearch, setItemSearch] = useState("");

  const [dropToggle, setdropToggle] = useState(true);
  let dropSymb = <span className="caret">&#9658;</span>; // Up arrow for open state
  if (!dropToggle) {
    dropSymb = <span className="caret">&#9660;</span>; // Down arrow for closed state
  }
  const handelLogOut = () => {
    setSession(null);
  };

  const handelKeyPress = async (e) => {
    try {
      if (e.key == "Enter") {
        const searchedData = await axios.post("/api/search",  {itemSearch} );
        console.log(searchedData.data.status);
        if(searchedData.data.status == false)
          {
            alert('We are working more.... , plese try another one');
            setItemSearch('')
            return;
          }
        navigate(`/search/${searchedData.data._id}` , { state: { searchData: searchedData.data } })
        setItemSearch("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const setFocus = ()=>{
    console.log('set focus called');
    searchInputRef.current.focus();
  }
  
  
  return (
    <div className="navbar z-10 absolute   w-full px-10">
      <nav className="flex  justify-between  h-[100px] items-center  p-5">
        <Link to={"/"} className="">
          <div className="left ">
            <h1 className="text-2xl  text-white font-extrabold">AgroGuide</h1>
          </div>
        </Link>
        {/* this is the serach bar that will appear when you will click the  */}

        {toggleSearch && (
          <div className="  w-[500px] ">
            <input
              onKeyDown={handelKeyPress}
              type="text"
              ref={searchInputRef}
              value={itemSearch}
              onChange={(e) => setItemSearch(e.target.value)}
              placeholder="Expolre your Intrest..."
              className="w-full  px-4 py-2 rounded-md border-gray-600 text-gray-500  focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <div className="right  flex items-center gap-4">
          <button
            className="text-white"
            onClick={() => setToggleSearch((prev) => (prev = !prev))}
          >
            Search
          </button>
          {session ? (
            <div className="dropdown">
              <button
                className="bg-green-600 p-2 rounded-lg first-letter:text-xl text-white hover:bg-green-500 font-extrabold"
                onClick={() =>{ 
                  setdropToggle((prev) => (prev = !prev))
                }}
              >
                {session.username} <span className="caret">{dropSymb}</span>
              </button>

              <div
                className={`${
                  dropToggle == true ? "hidden" : null
                } dropdown-content  absolute flex flex-col  gap-1  border-2 border-gray-600 rounded p-2  text-white`}
              >
                <Link
                  to="/profile"
                  className={`bg-gray-600 ${
                    session.role == 0 ? "hidden" : ""
                  } p-2 rounded`}
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="bg-gray-600 p-2  rounded"
                  onClick={handelLogOut}
                >
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
