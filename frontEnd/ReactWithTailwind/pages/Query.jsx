import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Query() {
  const [Query, setQuery] = useState({
    title: "",
    description: "",
  });

  const sendQuery = async () => {
    try {
        let resp = await axios.post('/api/query',Query);
        resp = resp.data
        if(resp.status)
        {
            alert("Query submitted successfully");
        }
    } catch (error) {
        console.log(error)
    }
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Query);
    sendQuery();
    setQuery({
      title: "",
      description: "",
    });
    // Handle form submission here
  };

 
  const handelChange = (e) => {
    // this will keep the previous state and update the new state
    setQuery({ ...Query, [e.target.name]: e.target.value });
  };

  return (
   <div className="border rounded-md absolute top-1/2 left-60 w-1/2 bg-gray-800 text-white">
  <form onSubmit={handleSubmit} className="p-10">
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-medium"
      >
        Title:
      </label>
      <input
        type="text"
        value={Query.title}
        name="title"
        placeholder="Enter Your Query title"
        onChange={handelChange}
        className="mt-1 p-2 border rounded outline-none bg-gray-700 text-white"
      />
    </div>
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium"
      >
        Description:
      </label>
      <textarea
        value={Query.description}
        name="description"
        onChange={handelChange}
        placeholder="Elaborate your problem"
        className="mt-1 p-2 h-20 border w-full rounded outline-none bg-gray-700 text-white"
      ></textarea>
    </div>
    <div className="flex justify-between">
    <button
      type="submit"
      onClick={handleSubmit}
      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Submit
    </button>
    <Link to={'/resolvedQuery'}
      className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
    >
      Resolved Query
    </Link>
    </div>
  </form>
</div>
  );
}
