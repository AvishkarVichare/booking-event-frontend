import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


function IndivisualCard ({event}){
  const navigate = useNavigate()

    return (
      <Card style={{ width: "18rem" }} className="box">
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.eventname}</Card.Title>
          <button onClick={()=>{navigate(`/event/${event._id}`)}} className="bg-purple-700 text-white px-3 py-2 rounded-xl">
            Details
          </button>
          
        </Card.Body>
      </Card>
     
    );
  };


  export default IndivisualCard;