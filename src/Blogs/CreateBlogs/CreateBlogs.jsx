// import { useRef, useState } from "react";
import { useState } from "react";
import Navbar from "../ComponentsBlog/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });

  // const [image, setImage] = useState(null);
  // const fileInputRef = useRef(null);

  const { title, description, image } = data;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e) => {
  //   setImage(e.target.files[0]); // Get the first file
  // };

  //aba hami yo data api lai dincham. create garda hamile post garnu parcha
  const createBlog = async () => {
    const data = {
      Title: title,
      description: description,
      image: image,
    };

    const response = await axios.post(
      "https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs",
      data
    );

    if (response.status == 201) {
      navigate("/");
      
    } else {
      alert("Something is Wrong in the code");
      console.log(response.status);
      
    }


    //Form bata data line arko tarika
    //yo garda useState haru pani chaindaina but name chai same hunu parxa
    /*
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData)

    */

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // console.log(image);

    // Reset state
    setData({
      title: "",
      description: "",
      image: "",
    });

    createBlog();
    // setImage(null);

    //Hamro API le Aile file lideina so image ko link halna input type text gareko:

    // Clear the file input
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = "";
    // }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md shadow-cyan-200 text-center">
        <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
        <form onSubmit={handleFormSubmit}>
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
              name="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
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
              name="image"
              id="image"
              placeholder="Enter image link"
              value={image}
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
              value={description}
              placeholder="Enter content"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlogs;
