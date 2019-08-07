import * as React from 'react';

import { movies as myMovies } from '../services/fakeMovieService';
import ButtonAction from './ButtonAction';
import TableHead from './table/thead';
import Paginator from './common/paginator';
import { IMovie } from '../interfaces';
import Like from './common/Like';
import paginate from '../utils/paginate';

export interface MovieProps {}

export interface MovieState {
  pageSize: number;
  currentPage: number;
  movies: IMovie[];
}

class Movie extends React.Component<MovieProps, MovieState> {
  state = { movies: myMovies, pageSize: 4, currentPage: 1 };
  handlePageChange = (page: number) => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  deleteItem = (movie: IMovie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    return count === 0 ? (
      <p className="alert alert-info"> no movies in the database.</p>
    ) : (
      <React.Fragment>
        <p> showing {count}</p>
        <table className="table">
          <TableHead />
          <tbody>
            {movies.map((movie: IMovie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre ? movie.genre.name : ''}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like />
                </td>
                <td>
                  <ButtonAction
                    idItem={movie._id ? movie._id : '' }
                    onHeaderClick={() => this.deleteItem(movie)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginator
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movie;
