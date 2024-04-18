import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/Session";
import { useNavigate, Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container absolute top-0 max-w-full">
      <div className="h-screen  ">
        <div
          className="h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)) ,url(https://extension.okstate.edu/articles/images/fall_gardening_banner.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="w-1/2 absolute top-[13%]   p-8  flex flex-col items-start">
          <h1 className="text-3xl  font-bold  text-white">
            Assisting in cultivating plants at home for a greener environment
            and access to healthy food.
          </h1>
          <button className="mt-4 bg-red-700 hover:bg-red-500 text-white p-4 rounded font-medium">
            Get Started
          </button>
        </div>
      </div>

      <div className="season-view grid grid-rows-1 grid-cols-3 justify-stretch mt-10 m-2 p-5">
        {/* image ->> Summer section */}
        <Link to={'/summer'}>
        <div className="border h-full mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
          <img
            src={
              "https://images.pexels.com/photos/19168813/pexels-photo-19168813/free-photo-of-view-of-a-combine-harvester-on-a-cropland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="this is summer"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold">Summer </h1>
            <p className="mt-2 text-lg text-gray-700">
              This is the perfect time to grow heat-loving plants like tomatoes,
              peppers, and zucchini.
            </p>
          </div>
        </div>
        </Link>


        {/* image ->> winter section */}

        <div className="border mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
          <img
            src={
              "https://images.pexels.com/photos/3624830/pexels-photo-3624830.jpeg"
            }
            alt="this is winter"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold">Winter</h1>
            <p className="mt-2 text-lg text-gray-700">
              Winter is a great time for cool-season crops like broccoli,
              lettuce, and kale. It's also a good time to plan for the spring.
            </p>
          </div>
        </div>

        {/* image ->> Rainy section */}
        <div className="border h-full mx-2 rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
          <img
            src={
              "https://images.pexels.com/photos/19136192/pexels-photo-19136192/free-photo-of-back-view-of-a-man-walking-on-a-rice-field.jpeg"
            }
            alt="this is Rainy"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold">Rainy Season</h1>
            <p className="mt-2 text-lg text-gray-700">
              The rainy season is ideal for water-loving plants like rice, taro,
              and lotus. It's also a good time to prepare for the upcoming dry
              season.
            </p>
          </div>
        </div>
      </div>

      {/* image ->> below section */}
      <section id="mission" className="subchild mt-20 flex p-10 gap-10">
        <h1 className="text-4xl font-medium">
          Grow Your Own Oasis Transform Your Space with Greenery Freshness
          Starts at Home
        </h1>

        <p className="text-2xl">
          Our mission is to provide accessible, practical plant knowledge to
          newcomers, enabling them to transform their spaces and enjoy the
          benefits of homegrown greenery.
        </p>
      </section>

      <section id="explore" className="summer flex p-10 mt-20  gap-10">
        <div className="left  mt-10 p-2">
          <h1 className="text-3xl font-medium">
            Maximize Your Harvest: Essential Summer Fruits & Vegetables -
            Emphasizes abundance and profit potential.
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Embrace the abundance of summer with our essential guide to the
            season's most profitable fruits and vegetables! Discover varieties
            that thrive in the heat and are in high demand at markets. We'll
            provide cultivation tips for maximum yields, ensuring a bountiful
            harvest. This guide will help you cash in on the summer season's
            best produce!
          </p>
        </div>
        <img
          className="rounded"
          src={`https://img.freepik.com/premium-photo/farmer-hold-vegetables-basket-food-summer-farm-generate-ai_98402-18682.jpg`}
          alt="This is the summer vegetable image"
        />
      </section>

      {/* lets write something for winter */}

      <section className="winter flex p-10 mt-20  gap-10">
        <img
          className="w-1/2 rounded"
          src={`https://wintergreenfarmblog.files.wordpress.com/2020/11/2020-csa-week-24.jpg`}
          alt="This is the Winter vegetable image"
        />
        <div className="left  mt-10 p-2">
          <h1 className="text-3xl font-medium">
            Unlock Winter Flavor: Profitable Crops for Farmers & Freshness for
            All
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Say goodbye to boring winter meals! This guide will show you which
            winter crops bring in the most profit. You'll learn how to grow
            strong, healthy vegetables even in the cold and meet the demand for
            fresh, local flavors. Get ready to discover the hidden potential of
            the winter growing season!
          </p>
        </div>
      </section>
    </div>
  );
}
