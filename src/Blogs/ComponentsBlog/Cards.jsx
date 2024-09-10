
import "./Cards.css";

const Cards = ({data}) => {
  const { createdAt, Title, avatar, description} = data;
  return (
 
    <div className="card p-2 grid gap-2">
      <img src={avatar} alt={Title} />
      <div className="container">
      <h6><b>{createdAt}</b></h6>
        <h6>
          <b>Title: {Title}</b>
        </h6>
        <p>Description: {description}</p>
      </div>
    </div>

  );
};

export default Cards;
