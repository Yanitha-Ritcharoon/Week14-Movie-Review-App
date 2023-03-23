import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'The Dark Knight',
                    rating: [4,4],
                    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    image: 'https://i.imgur.com/3jLPB46.jpg',
                    reviews: [
                    {
                        name: 'Moddang', 
                        review: "Best BatMan ever! I didn't get bored at all even though the movie is over 2 hours!" 
                    },
                    { 
                        name: 'Chris', 
                        review: 'My favorite movie forever! I can watch this movie a hundred times and still enjoy it!' 
                    },
                    ],
                },
                {
                    id: 2,
                    title: 'The Lord of the Rings',
                    rating: [5,5],
                    synopsis: 'A young hobbit named Frodo had been entrusted with a powerful ring, and he must embark on a perilous journey to destroy it before it falls into the hands of the evil Sauron.',
                    image: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
                    reviews: [
                        {
                            name: 'Frank', 
                            review: "One of the best movies ever made! A must-watch for every fantasy fan." 
                        },
                        {
                            name: 'Leyna',
                            review: 'Epic adventure that will leave you wanting more.' 
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'Transformers',
                    rating: [3,4],
                    synopsis: 'Two races of robots, Autobots and Decepticons, bring their battle to Earth, with a clue to ultimate power held by a young teenager named Sam.',
                    image: 'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
                    reviews: [
                        {
                            name: 'Kali', 
                            review: "Action-packed movie with awesome visual effects. A must-watch for all sci-fi fans." 
                          },
                          {
                            name: 'Janet', 
                            review: 'Great movie, loved the robots and the storyline.'
                          },
                    ]
                },
            ]
        };
    }

    handleMovieReview = (movieId, review) => {
        const updateMovies = this.state.movies.map(movie => {
            if (movie.id === movieId) {
                return {
                    ...movie,
                    reviews: [...movie.reviews, review]
                };
            }
            return movie;
        })
        this.setState({ movies: updateMovies });
    }


    render() {
        const movies = this.state.movies.map(movie => (
            <Movie 
                key={movie.id} 
                title={movie.title}
                image={movie.image}
                synopsis={movie.synopsis}
                rating={movie.rating}
                reviews={movie.reviews}
            />
        ));
        return <div>{movies}</div>;
    }
}
