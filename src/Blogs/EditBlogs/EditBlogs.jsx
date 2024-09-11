import { useEffect, useState } from "react";
import Navbar from "../ComponentsBlog/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogs = () => {
  const [blog, setBlog] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const { Title, avatar, description } = blog;

  // Fetch data for a specific blog (replace with your blog ID)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs/" + id // Replace `1` with your blog ID
      );
      if (response.status === 200) {
        setBlog(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs/${id}`,
        blog
      );

      if (response.status === 200) {
        console.log("Blog updated successfully", response.data);
        navigate("/SingleBlog/" + id);
      }
    } catch (error) {
      console.error("Error updating blog", error);
    }
  };

  return (
    <>
      <Navbar />
      {/* <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
        <form>
          <div className="mb-4">
            <img
              className="w-full rounded-lg"
              src={image}
              alt={title}
            />{" "}
            <br />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
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
      </div> */}
      <div className="max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md shadow-cyan-200 text-center">
        <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
        <form onSubmit={handleEdit}>
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
              name="Title"
              type="text"
              placeholder="Enter title"
              value={Title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avatar"
            >
              Image
            </label>
            {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            /> */}

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="avatar"
              id="image"
              placeholder="Enter image link"
              value={avatar}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Enter content"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBlogs;
