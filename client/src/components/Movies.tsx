import * as React from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import ButtonAction from './ButtonAction';
import TableHead from './table/thead';
import Paginator from './common/paginator';
import { IMovie, IGenre } from '../interfaces';
import Like from './common/Like';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';

export interface MovieProps {}

export interface MovieState {
  pageSize: number;
  currentPage: number;
  movies: IMovie[];
  genres: IGenre[];
  selectedGenre: IGenre;
}

class Movie extends React.Component<MovieProps, MovieState> {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: { _id: '', name: '' }
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  handleGenreSelect = (genre: IGenre) => {
    this.setState({ selectedGenre: genre });
  };
  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };
  deleteItem = (movie: IMovie) => {
    const movies = this.state.movies.filter((m: IMovie) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre
    } = this.state;

    const filtered = !!selectedGenre._id
      ? allMovies.filter((m:any) => m.genre._id === selectedGenre._id)
      : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return filtered.length === 0 ? (
      <p className="alert alert-info"> no movies in the database.</p>
    ) : (
      <React.Fragment>
        <p> showing {filtered.length}</p>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <ListGroup
                items={genres}
                selectedGenre={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
                textProperty="name"
                valueProperty="_id"
              />
            </div>
            <div className="col-10">
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
                          idItem={movie._id ? movie._id : ''}
                          onHeaderClick={() => this.deleteItem(movie)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Paginator
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
