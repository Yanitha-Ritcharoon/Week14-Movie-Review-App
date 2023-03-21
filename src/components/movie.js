import React from 'react';
import Stars from './stars';
import ReviewList from './review-list';
import ReviewForm from './review-form';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            movies: props.movies ? props.movie.map(movie => ({...movie, reviews: movie.reviews})) : []
        };
    }

    handleStarClick = (selectedStars) => {
        this.props.onStarClick(selectedStars);
    }

    handleReviewSubmit = (review) => {
        this.setState(prevState => ({
            reviews: [...prevState.reviews.concat(review)]
        }));
    }

    render() {
        const { title, image, synopsis, rating } = this.props;
        const { reviews } = this.state;
        const defaultReview = reviews.length > 0 ? reviews[0] : { name: '', review: '' };

        return(
            <div className="card mb-4">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="d-flex justify-content-center">
                  <img src={image} className="card-img" alt={title} />
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{synopsis}</p>
                  <h5 className="text-rating">Rating: <Stars rating={rating}/></h5>
                  <ReviewList reviews={[defaultReview]}/>
                  <ReviewForm onSubmit={this.handleReviewSubmit}/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}