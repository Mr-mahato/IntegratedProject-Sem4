import "../style.css";
// import homeImage from "../assest/Firstpage.jpeg";
export default function Home() {
  return (
    <div className="container  max-w-full">
      <div className="">
        <div className="h-full object-contain bg-black/50">
          <img
            className="max-h-[644px] w-full bg-cover "
            src="https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is the farmer field"
          />
        </div>

        <div className="w-1/2  absolute lg:bottom-3 md:bottom-2 bottom-1/4 md:p-5 p-8 m flex flex-col items-start">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold  text-white/90">
            Assisting in cultivating plants at home for a greener environment
            and access to healthy food.
          </h1>
          <button className="mt-4 bg-white/85 p-4 rounded font-medium">
            Learn More
          </button>
        </div>
      </div>

      {/* image ->> below section */}
      <section id="mission" className="subchild flex p-10 gap-10">
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

      <section id="explore" className="summer flex p-10 mt-10  gap-10">
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

      <section className="winter flex p-10 mt-10  gap-10">
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
