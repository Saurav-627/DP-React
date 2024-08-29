import Cards from "../ComponentsBlog/Cards";
import Navbar from "../ComponentsBlog/Navbar";
import cardData from "../../JSONdata/cardData.json";

const CreateBlogs = () => {
  return (
    <div>
      <Navbar />
      <ul className="grid grid-cols-3 ">
        {cardData.map((curElem) => {
         return <Cards key={curElem.id} data={curElem} />;
        })}
      </ul>
    </div>
  );
};

export default CreateBlogs;
