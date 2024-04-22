import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../context/Session";

export default function Profile() {
  const { session } = React.useContext(SessionContext);
  const [selectedOption, setSelectedOption] = useState("posts");
  const [moderator, setModerator] = useState(null);
  // this  is for the list of the query being asked through out the application
  const [query, setQuery] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeQueryForm, setActiveQueryForm] = useState(null);
  const [queryAsked, setQueryAsked] = useState(null);
  const [resolvedAns, setResolvedAns] = useState("");
  // here i have create the moderator states
  const [modData, setModData] = useState({
    email: "",
    username: "",
    password: "",
    role: 2,
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const getModerator = async () => {
    try {
      const { data } = await axios.get("api/moderator");
      setModerator(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getQuery = async () => {
    try {
      const { data } = await axios.get("api/query");
      setQuery(data);
    } catch (error) {}
  };

  const deleteModerator = async (email) => {
    try {
      const { data } = await axios.delete(`api/deleteMod/${email}`);
      if (data.status) {
        setModerator(moderator.filter((mod) => mod.email !== email));
      } else alert("Moderator deletion failed");
    } catch (error) {
      console.log(error);
    }
  };

  const handelModDataChange = async (e) => {
    setModData({ ...modData, [e.target.name]: e.target.value });
  };

  const handelModeratorCreate = async (e) => {
    e.preventDefault();
    try {
      setModerator([...moderator, modData]);
      const { data } = await axios.post("api/signup", modData);
      if (data.status) {
        setModData({
          email: "",
          username: "",
          password: "",
        });
        return;
      } else alert(`Moderator creation failed`);
    } catch (error) {
      alert("server error");
      console.log(error);
    }
  };

  const handelQueryResolved = async (e) => {
    e.preventDefault();
    try {
      if (!resolvedAns) return alert("Please enter the resolved answer");

      const queryResolvedObj = query.find((q) => q.id == activeQueryForm);
      queryResolvedObj.resolvedAns = resolvedAns;
      queryResolvedObj.status = "resolved";
      queryResolvedObj.resolvedBy = session.username;
      console.log(queryResolvedObj);
      const { data } = await axios.post(
        `api/query/${activeQueryForm}`,
        queryResolvedObj
      );
      if (data.status) {
        //setQuery(query.filter((q) => q.id != activeQueryForm));
        setActiveQueryForm(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modElement =
    moderator &&
    moderator.map((mod) => {
      return (
        <div
          key={mod.email}
          className="flex justify-between items-center p-2 border-b"
        >
          <div className="flex gap-10">
            <p>{mod.username}</p>
            <p>{mod.email}</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => deleteModerator(mod.email)}
          >
            Delete
          </button>
        </div>
      );
    });

  const queryElem =
    query &&
    query.map((q) => {
      return (
        <div
          key={q.id}
          className="flex flex-col gap-2 bg-white p-5  rounded-lg shadow-lg "
        >
            <p>{q.title}</p>
            <p className="text-gray-600 ">{q.description}</p>
          <button
            onClick={() => {
              setActiveQueryForm(activeQueryForm === q.id ? null : q.id);
              setQueryAsked(q.query);
            }}
            className={`bg-blue-600 hover:bg-blue-500 py-2 w-40 rounded text-white ${
              q.status === "resolved" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={q.status === "resolved"}
          >
            {activeQueryForm === q.id ? "Cancel" : "Resolve"}
          </button>
        </div>
      );
    });

  useEffect(() => {
  session.role == 2 ? setSelectedOption("queries") : "";
    getModerator();
     getQuery();
  }, []);

  return (
    <div className="grid grid-cols-4 min-h-screen py-24  bg-[#324a34]">
      <aside className="self-start sticky top-3 col-span-0 bg-gray-200 p-4">
        <ul>
          {session.role == 1 && (
            <>
              <li
                className={`${
                  selectedOption === "posts" ? "text-blue-500" : ""
                } text-xl my-5`}
              >
                <button onClick={() => handleOptionChange("posts")}>
                  Create Post
                </button>
              </li>
              <li
                className={`${
                  session.role == 1 && selectedOption === "moderators"
                    ? "text-blue-500"
                    : ""
                } text-xl my-5`}
              >
                <button onClick={() => handleOptionChange("moderators")}>
                  Handle Moderators
                </button>
              </li>
            </>
          )}

          <li
            className={`${
              selectedOption === "queries" ? "text-blue-500" : ""
            } text-xl my-5`}
          >
            <button onClick={() => handleOptionChange("queries")}>
              Answer Queries
            </button>
          </li>
        </ul>
      </aside>

      <main className="p-4 col-span-3   ">
        {session.role ==1 && selectedOption === "posts" && (
          <form className="flex flex-col space-y-4">
            <label className="flex flex-col">
              Plant Type:
              <select className="mt-1 p-2 border w-40 rounded">
                <option value="vegetable">Vegetable</option>
                <option value="flower">Flower</option>
                <option value="fruit">Fruit</option>
              </select>
            </label>

            <label className="flex flex-col">
              Description:
              <textarea
                placeholder="Enter plant description"
                className="mt-1 p-2 h-20 border rounded"
              ></textarea>
            </label>

            <label className="flex flex-col">
              Instructions to Grow:
              <textarea
                placeholder="Enter instructions to grow"
                className="mt-1 p-2 h-20 border rounded"
              ></textarea>
            </label>

            <label className="flex flex-col">
              Images:
              <input type="file" multiple className="mt-1 p-2 border rounded" />
            </label>

            <button
              type="submit"
              className="w-40 mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        )}

        {selectedOption === "moderators" && (
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="mb-4 p-2 bg-blue-500 text-white rounded"
            >
              {showForm ? "Cancel" : "Create Moderator"}
            </button>

            {showForm && (
              <form className="flex flex-col space-y-4">
                <label className="flex flex-col w-1/3 outline-none">
                  Username:
                  <input
                    type="text"
                    value={modData.username}
                    name="username"
                    placeholder="Enter username"
                    onChange={handelModDataChange}
                    className="mt-1 p-2 border rounded outline-none"
                  />
                </label>

                <label className="flex flex-col">
                  Email:
                  <input
                    type="email"
                    value={modData.email}
                    name="email"
                    onChange={handelModDataChange}
                    placeholder="Enter email"
                    className="mt-1 p-2 border rounded w-1/3 outline-none"
                  />
                </label>

                <label className="flex flex-col">
                  Password:
                  <input
                    type="password"
                    value={modData.password}
                    name="password"
                    onChange={handelModDataChange}
                    placeholder="Enter password"
                    className="mt-1 p-2 border rounded w-1/3 outline-none"
                  />
                </label>

                <button
                  onClick={handelModeratorCreate}
                  type="submit"
                  className="w-40 mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </form>
            )}

            {modElement}
          </div>
        )}

        {selectedOption === "queries" && (
          <div className="flex flex-col gap-4">
            {activeQueryForm && (
              <div className="flex flex-col gap-1">
                <form className="flex flex-col ">
                  <h1 className="text-gray-500">{queryAsked}</h1>
                  <label className="flex flex-col">
                    Description:
                    <textarea
                      value={resolvedAns}
                      onChange={(e) => setResolvedAns(e.target.value)}
                      placeholder="Enter description"
                      className="mt-1 p-2 h-20 border rounded outline-none"
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    onClick={handelQueryResolved}
                    className="mt-4 p-2 w-40 bg-green-500 text-white rounded"
                  >
                    Resolve
                  </button>
                </form>
              </div>
            )}
            {queryElem}
          </div>
        )}
      </main>
    </div>
  );
}
