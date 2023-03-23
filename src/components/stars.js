import { useState } from 'react';

const Star = (props) => {  
    const [rating, setRating] = useState(0);
    const averageRating = Math.floor(props.rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.rating.length)
    const [hover, setHover] = useState(0);
    const [numberOfRatings, setNumberOfRatings] = useState(props.rating.length)
    
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (rating || hover) ? "on" : "off"}
              onClick={() => {
                setRating(index)
                if (rating === 0)
                  setNumberOfRatings(numberOfRatings + 1)
            }}
              onMouseEnter={() => {
                setHover(index)
              }}
              onMouseLeave={() => setHover(0)}
            >
              {((index <= averageRating) || (index <= rating)) ? <span className="star">&#9733;</span> : <span className="star">&#9734;</span> }
            </button>
          );
        })}
        <span>{numberOfRatings}</span>
      </div>
    );
  };
  
  export default Star;

