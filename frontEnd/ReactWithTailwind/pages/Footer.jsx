import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#273d28] text-white pt-8 pb-6">
      <br></br>
      <div className="container mx-auto px-11 py-3">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-montserrat  text-blueGray-700 ">
              AgroGuide
            </h4>
            <h5 className="text-sm mt-0 mb-2 text-blueGray-600 ">
              Empowering Agriculture, Nourishing the World
            </h5>
            <div className="border-t border-#405741 opacity-20"></div>

            <div className="mt-6 lg:mb-0 mb-6">
              {/* <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon class="fab fa-twitter" />
              </button>
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-dribbble"></i>
              </button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-github"></i>
              </button> */}

              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button
                className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
             
              <button
                className=" text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button
                className=" text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-20">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-5/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {/* <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Our Services</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">About Us</a>
              </li>
              <li>
              <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
            </li> */}
                </ul>
              </div>
              <div className="w-full lg:w-6/12 px-0">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Newsletter
                </span>
                <ul className="">
                  <br></br>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800  block pb-3 text-xs">
                      Subscribe to our weekly Newsletter and receive updates via
                      email.
                    </p>
                  </li>
                  {/* <li className="flex">
                    <input
                      type="email"
                      placeholder=" Email"
                      className="bg-[#324a34] outline-none border border-[#324a34] rounded-3xl px-2 py-1 "
                    />
                    <button className="bg-[#f7c25e]  rounded-full p-2 ">
                      Go
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-#405741 opacity-20" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              © <span id="get-current-year">2024 </span>AgroGuide.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}