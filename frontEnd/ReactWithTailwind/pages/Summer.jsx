import React from "react";
import { Link } from "react-router-dom";
import { people } from "./data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer.jsx";
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
    <div className="min-h-screen relative   bg-[#324a34] w-full">
      {/* this div is having the background image */}
      <div
        className="h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)) ,url(https://images.pexels.com/photos/19168813/pexels-photo-19168813/free-photo-of-view-of-a-combine-harvester-on-a-cropland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* this div is having the text to be left part of the screen */}
      <div className="absolute top-[14%] w-1/3 left-10 ">
        <div>
          <h1 className="text-4xl font-bold text-white ">
            Summer Produce Guide
          </h1>
          <p className="text-3xl my-5 text-white">
            Discover the best vegetables, fruits, and flowers to grow this
            summer
          </p>
        </div>
      </div>

      {/* this div is having the choices to be right part of the screen */}
      <div className="flex flex-col  gap-4 p-10">
        <div className="text-white grid grid-rows-1 grid-cols-3  mt-10 m-2 p-5">
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
                <p className="mt-2 text-lg ">
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
              <p className="mt-2 text-lg ">
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
              <p className="mt-2 text-lg ">
                Not to mention, summer is also a great time for flowers. Many
                species bloom beautifully under the summer sun, adding a splash
                of color and fragrance to your garden.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        className="mt-10 bg-gray-500 bg-cover min-h-full p-10 mb-20 flex "
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/601047/pexels-photo-601047.jpeg)`,
        }}
      >
        
        <div className="w-3/4 m-auto">
          <div>
            <Slider {...settings}>
              {people.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[470px] text-black rounded-xl"
                >
                  <div className="h-56 bg-green-500  flex justify-center items-center rounded-t-xl">
                    <img
                      src={d.imgUrl}
                      alt=""
                      className="h-48 w-48 bg-cover bg-top-[20%]  rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center text-medium">{d.review}</p>
                   
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Summer;
