// EditBlog.js
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../ComponentsBlog/Navbar";

const EditBlogs = () => {
  const [title, setTitle] = useState("Blog Title");
  const [content, setContent] = useState("Blog Content");

  const handleEdit = () => {
    // Handle edit logic here
    console.log("Edit button clicked");
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Delete button clicked");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="button"
              onClick={handleEdit}
            >
              <FaEdit className="mr-2" /> Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleDelete}
            >
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlogs;
