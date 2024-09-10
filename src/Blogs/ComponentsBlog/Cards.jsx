
import { useNavigate } from "react-router-dom";
import "./Cards.css";


const Cards = ({data}) => {
  const {id, createdAt, Title, avatar, description} = data;
  const navigate = useNavigate();

  return (
 
    <div className="card p-2 grid gap-2">
      <img className="w-full rounded-lg" src={avatar} alt={Title} />
      <div className="container">
      <h6><b>{createdAt}</b></h6>
        <h6>
          <b>Title: {Title}</b>
        </h6>
        <p>Description: {description}</p>
      </div>
       <p className="text-center rounded-sm p-4 cursor-pointer hover:text-cyan-600" onClick={()=>navigate(`SingleBlog/${id}`)}>See More</p>
    </div>

  );
};

export default Cards;
