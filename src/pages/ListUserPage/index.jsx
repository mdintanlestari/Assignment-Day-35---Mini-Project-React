import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";

function ListUserPage() {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?${page}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
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
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-14">List User</h1>
      <Breadcrumb />
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-3 ">
        {searchData.map((user) => (
          <div
            className="flex flex-col items-center justify-center p-2 my-10 bg-gray-500 rounded-lg mx-9"
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
              className="mt-4 text-black transition-transform duration-300 ease-in-out hover:scale-105"
            >
              detail
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span className="border-2 rounded ">{page}</span>{" "}
        <span>{totalPage}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ListUserPage;
