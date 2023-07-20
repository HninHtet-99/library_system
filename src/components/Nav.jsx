import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();
  let handleSearch = () => {
    navigate("/?search=" + search);
    setSearch("");
  };
  return (
    <nav className="border border-b-1">
      <ul
        className="flex items-center justify-between p-3 mx-auto"
        style={{ maxWidth: "56rem" }}
      >
        <li className="flex items-center gap-3">
          {/* search feature */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="search book..."
            className="outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-white bg-primary px-2 py-1 rounded-2xl flex items-center gap-1"
          >
            <span className="hidden md:block">Search</span>
          </button>
        </li>

        <Link
          to={"/"}
          className="flex items-center md:ml-32 gap-3 cursor-pointer"
          // style={{marginRight:20}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>

          <span className="text-2xl font-bold text-primary hidden md:block">
            Book Store
          </span>
        </Link>

        <li className="flex gap-2 items-center">
          {/* create book */}
          <Link
            to={"/create"}
            className="text-white bg-primary px-2 py-1 rounded-2xl flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden md:block">Create book</span>
          </Link>
          {/* profile image */}
          <div className="w-7">
            <img
              src="https://lh3.googleusercontent.com/ogw/AOLn63FZd6RWnr0BSIv6vQj36q5-_OTNH0qWwvyTqmEj=s32-c-mo"
              alt=""
              className="w-full rounded-full"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
