import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function ListUserPage() {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      setData(response.data.data);
      setTotalPage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const searchData = data.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <div className="bg-cover bg-gradient-to-b from-gray-900 to-indigo-950 font-poppins ">
      <Navbar />
      <div className="grid items-center justify-center w-full h-full min-h-screen text-white ">
        <h1 className="my-6 text-5xl font-bold text-center md:my-14">
          List User
        </h1>
        <Breadcrumb />
        <div className="flex justify-end w-full">
          <div className="relative flex w-64 text-black">
            <span className="absolute inset-y-0 flex items-center text-gray-500 left-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              className="w-full pl-8 pr-2 border border-gray-300 rounded h-7 focus:outline-none focus:ring-1 focus:ring-blue-400"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-5 mt-5 text-black md:gap-16 md:grid-cols-3 grid-col-1 ">
          {searchData.map((user) => (
            <div
              className="flex flex-col items-center justify-center w-64 h-64 p-2 my-5 bg-white rounded-lg "
              key={user.id}
            >
              <img
                className="object-cover w-32 h-32 rounded-full"
                src={user.avatar}
                alt={user.first_name}
              />
              <p className="mt-5 font-medium">
                {user.first_name} {user.last_name}
              </p>
              <Link
                to={`/detailpage/${user.id}`}
                className="flex items-center justify-center h-10 gap-2 px-4 py-2 mt-4 font-medium text-center text-black transition duration-300 ease-in-out transform bg-blue-400 border-2 rounded-lg w-18 font-poppins hover:bg-stone-500 hover:scale-105"
              >
                detail
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-5 mb-8 text-white">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 text-black bg-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-1 border rounded">{page}</span>
          <span>/ {totalPage}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className="px-4 py-2 text-black bg-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListUserPage;
