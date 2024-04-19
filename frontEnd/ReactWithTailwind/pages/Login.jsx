import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { SessionContext } from "../context/Session";
export default function Login() {
  const { session, setSession } = useContext(SessionContext);
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelLogin = async () => {
    try {
      let resp = await axios.post("/api/login", form);
      resp = resp.data;
      if (resp.status) {
        setSession({ username: resp.username, role: resp.role });
        Navigate("/");
      } else {
        alert("bad credential");
      }
    } catch (error) {
      alert("server error");
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Here you would typically send the form data to your server
  };

  return (
    <div
      className="h-screen flex justify-center flex-col items-end px-20 bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg)`,
      }}
    >
      <div className="bg-white p-6 rounded-lg w-1/3 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Email:
            </label>
            <input
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Password:
            </label>
            <input
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            onClick={handelLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md w-full mt-4"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center my-4">
          <span className="text-gray-600 mx-2">Don't have an account:</span>
          <Link
            to={"/signup"}
            className=" hover:text-blue-800 ml-4"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
