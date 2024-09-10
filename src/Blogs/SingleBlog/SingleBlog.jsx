// SingleBlog.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../ComponentsBlog/Navbar";

function SingleBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blog, setBlog] = useState({
    title: "Blog Title",
    content: "Blog Content",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Handle search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-6 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Single Blog</h1>
          <div className="flex items-center cursor-pointer">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search blogs"
            />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <p className="text-gray-600">{blog.content}</p>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
