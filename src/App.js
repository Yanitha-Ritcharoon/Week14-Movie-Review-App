import React from 'react';
import MovieList from './components/movie-list';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends React.Component {
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