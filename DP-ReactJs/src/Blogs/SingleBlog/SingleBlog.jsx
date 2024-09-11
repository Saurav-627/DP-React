// SingleBlog.js
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTrash,FaEdit } from "react-icons/fa";
import Navbar from "../ComponentsBlog/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SingleBlog() {
  const [searchTerm, setSearchTerm] = useState("");

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const { title, image, description } = blog;
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get(
      "https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs/" + id
    );

    if (response.status == 200) {
      setBlog({
        title: response.data.Title,
        description: response.data.description,
        image: response.data.avatar,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Handle search logic here
    console.log("Search term:", searchTerm);
  };

  // const handleEdit = async () => {
  //   try {
  //     const response = await axios.put(
  //       `https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs/${id}`,
  //       blog
  //     );
  //     if (response.status === 200) {
  //       console.log("Blog updated successfully", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error updating blog", error);
  //   }
  // };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs/${id}`
      );
      if (response.status === 200) {
        console.log("Blog deleted successfully");
        navigate("/");
        alert("Blog deleted Successfully")
        // Optionally, you can redirect or update UI after deletion
      }
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md">
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
        <div className="w-full flex justify-center">
          <div className="card p-2 grid gap-2 w-1/2">
            <img className="w-full rounded-lg" src={image} alt={title} />
            <div className="container">
              <h6>
                <b></b>
              </h6>
              <h6>
                <b>Title: {title}</b>
              </h6>
              <p>Description: {description}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm"
                  type="button"
                  onClick={() => navigate("/EditBlog/"+id)}
                >
                  <FaEdit className="" /> Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline text-sm"
                  type="button"
                  onClick={handleDelete}
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
