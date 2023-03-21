import { useState } from 'react';

const Star = () => {  
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = async (ratingValue) => {
      try {
        const response = await fetch("/submit-rating", {
          method: "POST",
          body: JSON.stringify({ rating: ratingValue }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          setRating(ratingValue);
        }
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= ((rating && hover) || hover) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(rating)}
              onMouseLeave={() => setHover(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  export default Star;

