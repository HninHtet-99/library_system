import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategory, setNewCategory] = useState("");
  let [categories, setCategories] = useState([]);

  let { setPostData, data: book } = useFetch(
    "http://localhost:3000/books",
    "POST"
  );
  let navigate = useNavigate();

  let addNewCategory = () => {
    setCategories((prev) => [newCategory, ...prev]);
    setNewCategory("");
  };
  let addBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      categories,
    };
    setPostData(data);
  };
  useEffect(() => {
    if (book) {
      navigate("/");
    }
  }, [book]);
  return (
    <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="book title"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="book description"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book category
          </label>
          <div className="flex items-center space-x-2">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="book category"
            />
            <button
              className="bg-primary p-1 rounded-lg"
              type="button"
              onClick={addNewCategory}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="space-x-3.5" style={{ marginTop: 20 }}>
          {categories.map((c) => (
            <span
              className="bg-primary text-white rounded-full text-sm px-2 py-1"
              key={c}
            >
              {c}
            </span>
          ))}
        </div>
        <button
          className="text-white bg-primary px-2 py-1 rounded-2xl flex justify-center items-center gap-1 w-full"
          style={{ marginTop: 20 }}
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
        </button>
      </div>
    </form>
  );
};

export default Create;
