import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const Navigate  = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelSignUp = async () => {
    const {username , email , password} = form;
    if(!username || !email || !password)
    {
        alert('you must filled all details');
        return;
    }
    try {
      const resp = await axios.post("/api/signup", form);
      if(resp.data)
      {
        alert(`user created successfully`);
        Navigate('/login')
      }
    } catch (error) {
        alert('server error');
        console.log(error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
  };

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
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
            onClick={handelSignUp}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md w-full mt-4"
          >
            Signup
          </button>
        </form>
        <div className="flex justify-center my-4">
          <Link to={"/login"} className="text-gray-500 hover:text-green-800">
            Login
          </Link>
          <Link
            to={"/signup"}
            className="text-gray-500 hover:text-blue-800 ml-4"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
