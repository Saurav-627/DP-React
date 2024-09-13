
import { useNavigate } from "react-router-dom";
import "./Cards.css";


const Cards = ({data}) => {
  const {id, createdAt, Title, avatar, description} = data;
  const navigate = useNavigate();

  return (
 
    <div className="card p-2 sm:p-3 md:p-4 grid gap-2 sm:gap-3 md:gap-4">
      <img className="w-full rounded-lg" src={avatar} alt={Title} />
      <div className="container">
        <h6 className="text-sm sm:text-sm md:text-md"><b>{createdAt}</b></h6>
        <h6 className="text-base sm:text-sm md:text-md">
          <b>Title: {Title}</b>
        </h6>
        <p className="text-sm sm:text-sm md:text-md">Description: {description}</p>
      </div>
      <p className="text-center rounded-sm p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg cursor-pointer hover:text-cyan-600" onClick={()=>navigate(`SingleBlog/${id}`)}>See More</p>
    </div>

  );
};

export default Cards;
