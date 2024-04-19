import React from "react";
import { Link } from "react-router-dom";
import { people } from "./data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Summer() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="h-screen absolute top-0 w-full">
      {/* this div is having the background image */}
      <div
        className="h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)) ,url(https://images.pexels.com/photos/19168813/pexels-photo-19168813/free-photo-of-view-of-a-combine-harvester-on-a-cropland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      {/* this div is having the choices to be right part of the screen */}
      <div className="flex flex-col  gap-4 p-10">
        <div className="season-view grid grid-rows-1 grid-cols-3  mt-10 m-2 p-5">
          {/* vegetable section */}
          <Link to={"/summer/vegetable"}>
            <div className="border h-full mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
              <img
                src={
                  "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="this is summer"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-bold">Vegetable </h1>
                <p className="mt-2 text-lg text-gray-700">
                  From juicy tomatoes and spicy peppers to vibrant zucchinis,
                  there's a wealth of delicious and nutritious produce you can
                  grow in your own backyard.
                </p>
              </div>
            </div>
          </Link>

          {/* Fruits section */}

          <Link
            to={"/summer/fruit"}
            className="border mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={
                "https://images.unsplash.com/photo-1631209121750-a9f656d28f46?q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"
              }
              alt="this is winter"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold">Fruits</h1>
              <p className="mt-2 text-lg text-gray-700">
                Summer fruits can provide a quick energy boost, help you stay
                hydrated, and reduce fatigue.
              </p>
            </div>
          </Link>

          {/* image ->> Rainy section */}
          <Link
            to={"/summer/flower"}
            className="border h-full mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={
                "https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg"
              }
              alt="this is Rainy"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold">Flower</h1>
              <p className="mt-2 text-lg text-gray-700">
                Not to mention, summer is also a great time for flowers. Many
                species bloom beautifully under the summer sun, adding a splash
                of color and fragrance to your garden.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-10 bg-gray-500 flex   min-h-full mb-20">
        <div className="w-3/4 m-auto">
          <div>
            <Slider {...settings}>
              {people.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[450px] text-black rounded-xl"
                >
                  <div className="h-56 bg-green-500 flex justify-center items-center rounded-t-xl">
                    <img
                      src={d.imgUrl}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center">{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summer;
