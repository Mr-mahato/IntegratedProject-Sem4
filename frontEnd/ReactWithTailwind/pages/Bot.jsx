import React, { useState, useEffect } from "react";
import axios from "axios";
import bot from "../images/robotiBot.png";
export default function Bot() {
  const [query, setQuery] = useState("");
  const [toogleBot, setToogleBot] = useState(false);

  const handleSubmit = () => {
    setQuery(" ");
    axios
      .post("/api/generate", { query })
      .then((res) => {
        if (res.data) {
          alert("Query Raised Successfully");
          console.log(res.data);
          setQuery("");
        } else {
          alert("Failed to raise query");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {toogleBot && (
        <div className=" h-[200px] w-full flex flex-col bg-gray-100">
          <div className="flex-grow overflow-y-auto p-4">
            {/* {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg w-max max-w-xs mx-auto ${
                  message.type === "user"
                    ? "bg-blue-200 ml-auto"
                    : "bg-gray-200 mr-auto"
                }`}
              >
                {message.text}
              </div>
            ))} */}
            <h1 className="text-black">hello wolrd</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center p-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow border border-gray-300 rounded-l-md p-2 mr-2 outline-none"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <img
        src={bot}
        alt="this is the bot which will help to solve your query"
        onClick={() => setToogleBot((prev) => (prev = !prev))}
        className="h-20 cursor-pointer"
      />
    </>
  );
}
