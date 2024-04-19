import { React, useEffect, useState } from "react";
import Header from "./Header.jsx";
import axios from "axios";
export default function ResolvedQuery() {
  const [queries, setQueries] = useState([]);

  const getQuery = async () => {
    try {
      const { data } = await axios.get("api/query");
      setQueries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuery();
  }, []);

  const listQuery = queries.map((query) => {
    if (query.status !== "resolved" || !query.status) return null;
    return (
      <div key={query.id} className="bg-white p-5  rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-3">{query.description}</h1>
        <p className="text-lg mb-2 text-gray-800">{query.resolvedAns}</p>
        <p className="text-gray-500 text-sm italic">
          Answered by: {query.resolvedBy}
        </p>
      </div>
    );
  });

  return (
    <div className="h-auto relative w-full  ">
      <Header />

      <div
        className={`relative   h-full flex bg-cover  flex-col justify-center   px-9 pt-60 pb-40`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1470') `,
        }}
      >
        <div className="w-1/3">
          <h1 className="text-4xl font-bold ">
            Got a Question <br />
            Get Your Answer
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            wondering about the best practices for gardening? Whatever your
            question may be, our community is here to provide the answers.
          </p>
        </div>
      </div>
      <main className="bg-[#f1f1f1fe] flex flex-col gap-2 p-10">
        {listQuery}
      </main>
    </div>
  );
}
