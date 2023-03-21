import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
    render() {
        const { name, reviews } = this.props;
        
      
    
        return (
            <div className="card review-list">
                <h4> Reviews:</h4>
                <div className="mb-2 text-black">
                {reviews.map((review, index) =>
                <Review 
                    key={index} 
                    name={name}
                    review={review} />
                )}  
                </div>
            </div>
        );
    }
}

