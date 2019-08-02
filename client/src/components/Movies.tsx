import * as React from 'react';
import { movies as myMovies } from '../services/fakeMovieService';
import ButtonAction from './ButtonAction';
import TableHead from './table/thead';
import { IMovie } from '../interfaces';

export interface MovieProps {}

export interface MovieState {
  movies: IMovie[];
}

class Movie extends React.Component<MovieProps, MovieState> {
  state = { movies: myMovies };

  deleteItem = (movie: IMovie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  renderBody() {
    return (
      <tbody>
        {this.state.movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <ButtonAction
                idItem={movie._id}
                onHeaderClick={() => this.deleteItem(movie)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  render() {
    const {length: count} = this.state.movies;
    return count === 0 ? (
      <p className="alert alert-info"> no movies in the database.</p>
    ) : (
      <React.Fragment>
        <p> showing {count}</p>
        <table className="table">
          <TableHead />
          {this.renderBody()}
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
