import React from 'react';
import MovieList from './components/movie-list';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'The Dark Knight',
        image: 'https://m.media-amazon.com/images/I/51jv1OR6knL._AC_.jpg',
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: 4.5,
        reviews: [
          { name: 'Alexa', review: "Best BatMan ever! I didn't get bored at all even though the movie is over 2 hours!" },
          { name: 'Chris', review: 'My favorite movie forever! I can watch this movie a hundred times and still enjoy it!' },
          { name: 'Dom', review: "New experience sci-fi, it's entertaining!" },
        ],
      },
      {
        id: 2,
        title: 'The Lord of the Rings',
        image: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        synopsis: 'A young hobbit named Frodo had been entrusted with a powerful ring, and he must embark on a perilous journey to destroy it before it falls into the hands of the evil Sauron.',
        rating: 4.5,
        reviews: [
          { name: 'Alexa', review: "One of the best movies ever made! A must-watch for every fantasy fan." },
          { name: 'Chris', review: 'Epic adventure that will leave you wanting more.' },
          { name: 'Dom', review: "The Lord of the Rings is a masterpiece, one of the greatest films of all time." },
        ],
      },
      {
        id: 3,
        title: 'Transformers',
        image: 'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Two races of robots, Autobots and Decepticons, bring their battle to Earth, with a clue to ultimate power held by a young teenager named Sam.',
        rating: 4.5,
        reviews: [
          { name: 'Alexa', review: "Action-packed movie with awesome visual effects. A must-watch for all sci-fi fans." },
          { name: 'Chris', review: 'Great movie, loved the robots and the storyline.' },
          { name: 'Dom', review: "Transformers is an entertaining movie that will keep you on the edge of your seat." },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <br />
        <header className="App-header">
          <h2 className="App-title">Movie Reviews</h2>
        </header>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <MovieList/>
            </div>
          </div>
        </div>
      </div>
        );
    }
}