import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            review: ''
        };
    }

    handleReviewChange = (event) => {
        if (event.target.name === "review") {
            this.setState({ review: event.target.value });
        } else if (event.target.name === "name")
        this.setState({ name: event.target.value }) ;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({review: this.state.review, name: this.state.name});
        this.setState({ review: '' });
        this.setState({ name: '' });
    }

    render() {
        const { review } = this.state;
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                <textarea 
                    type="text"
                    placeholder='Enter your reviews'
                    value={review} 
                    onChange={this.handleReviewChange}
                    className="col"
                    name="review"
                />
                </div>
                <div className="row">
                <input 
                    type="text" 
                    id="username" 
                    name="name" 
                    placeholder='Name'
                    value={name}
                    onChange={this.handleReviewChange}
                    className="col"
                    />
                    <button type="submit" className='review btn btn-primary'>Review</button>
                </div>
            </form>
        );
    }
}
