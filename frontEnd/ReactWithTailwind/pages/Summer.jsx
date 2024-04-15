import React from "react";
import { Link } from "react-router-dom";
function Summer() {
  return (
    <div className="h-screen relative w-full">
      <div
        className="h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)) ,url(https://extension.okstate.edu/articles/images/fall_gardening_banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="flex items-center justify-between p-5 ">
          <div>
            <Link to={'/'} className="text-white text-2xl  font-bold">
            Agroguide
            </Link>
          </div>
          <div>
            <a href="/vegetables" className="text-white mx-2">
              About US
            </a>
            <a href="/fruits" className="text-white mx-2">
              Recommendations
            </a>
            <a href="/farming-tips" className="text-white mx-2">
              Farming Tips
            </a>
          </div>
        </nav>
        {/* this div is having the text to be left part of the screen */}
        <div className="absolute top-1/2 w-1/3 left-10 ">
          <div>
            <h1 className="text-4xl font-bold text-white ">
              Summer Produce Guide
            </h1>
            <p className="text-3xl my-5 text-gray-200">
              Discover the best vegetables, fruits, and flowers to grow this
              summer
            </p>
          </div>
        </div>
      </div>

      {/* next component started */}
      <h1 className="text-2xl text-center">
        With Farming you can have better health
      </h1>
      {/* this is the choice section */}
      <div className="choice h-1/2 grid grid-cols-3 p-2   gap-2">
        {/* 1st * /summer/vegetable */}

        <div
          className="relative   flex rounded-md justify-center transform transition-transform duration-700 hover:scale-95"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D)`,
            backgroundSize: "cover",
          }}
        >
          <Link to={"/summer/vegetable"}>
            <div className="opacity-0 cursor-pointer hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
              Vegetables
            </div>
          </Link>
        </div>

        {/* 2nd /summer/Fruits */}
        <div
          className="relative   rounded-md box-shadow: h-offset v-offset  spread color  transform transition-transform duration-700 hover:scale-95"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(https://images.unsplash.com/photo-1631209121750-a9f656d28f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEZydWl0c3xlbnwwfHwwfHx8MA%3D%3D)`,
            backgroundSize: "cover",
          }}
        >
          <Link to={"/summer/fruit"}>
            <div className="opacity-0 cursor-pointer hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
              Fruits
            </div>
          </Link>
        </div>

        {/* 3rd /summer/Flower */}
        <div
          className="relative flex rounded-md shadow-lg justify-center transform transition-transform duration-700 hover:scale-95"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(https://cdn.firstcry.com/education/2022/12/12101916/Flower-Names-In-English-For-Kids.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <Link to={"/summer/flower"}>
            <div className="opacity-0 cursor-pointer hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
              Flowers
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Summer;
