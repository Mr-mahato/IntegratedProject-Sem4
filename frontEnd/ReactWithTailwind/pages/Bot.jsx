import React, { useState, useEffect } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import BeatLoader from "react-spinners/BeatLoader";
export default function Bot({ setShowBot, showBot }) {
  const [query, setQuery] = useState("");
  const [toogleBot, setToogleBot] = useState(true);
  const [messages, setMessages] = useState([]);
  const [loading  , setlaoding]  = useState(false);

  const handleSubmit = () => {
    if (!query) {
      alert("Please ask a query!!");
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: query },
    ]);
    setlaoding(true)
    setQuery(" ");
    axios
      .post("/api/generate", { query })
      .then((res) => {
        if (res.data) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", text: res.data },
          ]);
          setlaoding(false)
          setQuery("");

        } else {
          alert("Failed to raise query");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCross = () => {
    setShowBot(false);
    console.log("cross clicked");
    console.log(showBot);
  };
  const handelEnterKey = (e)=>{
    if(e.key == 'Enter') handleSubmit();
  }
  return (
    <>
      {toogleBot && (
        <div className="absolute top-12 h-[500px] w-1/3 flex flex-col mt-20 right-2 rounded-md justify-center bg-[#324a34]">
          <div className="flex p-3 justify-center items-center">
            <h1 className="text-black  bg-green-300 w-2/3 mx-auto text-xl text-center mt-1 rounded-md">
              AgroGuide Helping desk?
            </h1>
            <RxCross2
              style={{ color: "black", cursor: "pointer" }}
              onClick={handleCross}
            />
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
              <>
                {message.type == "user" && (
                  <div
                    className={`mb-2 p-3 rounded-lg w-max max-w-xs flex-end bg-gray-600 mr-auto `}
                  >
                    {message.text}
                  </div>
                )}

                {/* this is the for the query answered  */}
                {loading && <BeatLoader
                color="#36d7b7"
                />}
                {message.type == "bot" && (
                  <div
                    key={index}
                    className={`mb-2 p-3 rounded-lg w-max max-w-xs flex-end text-black ${
                      message.type === "bot"
                        ? "bg-white  ml-auto"
                        : "bg-gray-200 mr-auto"
                    }`}
                  >
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="flex items-center p-4">
            <input
              type="text"
              value={query}
              onKeyDown={handelEnterKey}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow border border-gray-300 text-white bg-[#324a34] rounded-l-md p-2 mr-2 outline-none"
              placeholder="Enter your message"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
      {/* {!toogleBot &&  <img
        src={bot}
        alt="this is the bot which will help to solve your query"
        onClick={() => setToogleBot((prev) => (prev = !prev))}
        className="h-20 ml-auto cursor-pointer"
      /> } */}
    </>
  );
}
