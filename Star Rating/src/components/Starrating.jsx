import { FaStar } from "react-icons/fa";
import { useState } from "react";
const Starrating = ({ rating }) => {
  const [hover, sethover] = useState(0);
  const [myrating,setmyrating]=useState(0);
  const handleClick = (index) => {
    console.log(myrating);
    setmyrating(index);
  };
  const handleMouseEnter = (index) => {
    console.log(myrating);
    sethover(index);
  };
  const handleMouseLeave = () => {
    sethover(0);
  };
  return (
    <div className="rating">
      {[...Array(rating)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index<(hover || myrating)?"active":"inactive"}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index+1)}
            onMouseLeave={() => handleMouseLeave(index + 1)}
            size={40}
          />
        );
      })}
    </div>
  );
};
export default Starrating;
// The logic here is that when i am hovering it will fill the starts till that index if i am not clicked it will resets to zero if leaved but if i clicked now the rating takes precendece. when mouse leaves hover state is still zero but now rating take precedence over hover. The hover takes precednece when non zero rating takes precedence when hover is zero
