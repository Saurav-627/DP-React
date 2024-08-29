import Navbar from "../ComponentsBlog/Navbar";

// import cardData from "../../JSONdata/cardData.json";
import Cards from "../ComponentsBlog/Cards";

import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogs = () => {
  const [Blogs, setBlogs] = useState([]);

  // fetching API through link
  const FetchBlogs = async () => {
    const response = await axios.get(
      "https://66cde3a18ca9aa6c8ccc1287.mockapi.io/Blogs"
    );
    if(response.status === 200){
    const responseData = response.data;
    setBlogs(responseData);
    }
  };

  useEffect(() => {
    FetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      <ul className="grid grid-cols-3 ">
        {Blogs.map((curElem) => {
          return <Cards key={curElem.id} data={curElem} />;
        })}
      </ul>

      {/* <ul className="grid grid-cols-3 ">
        {cardData.map((curElem) => {
          return <Cards key={curElem.id} data={curElem} />;
        })}
      </ul> */}
    </div>
  );
};

export default AllBlogs;
