import * as React from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Paginator from "./common/paginator";
import { IMovie, IGenre } from "../interfaces";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./table/table";

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
    selectedGenre: { _id: "", name: "" },
  };
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "allMovies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleGenreSelect = (genre: IGenre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };
  handleSort = (columnName: string) => {
    console.log(columnName);
  };
  deleteItem = (movie: IMovie) => {
    const movies = this.state.movies.filter((m: IMovie) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state;

    const filtered =
      !!selectedGenre._id && selectedGenre._id !== "allMovies"
        ? allMovies.filter((m: any) => m.genre._id === selectedGenre._id)
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
              <MoviesTable
                movies={movies}
                onSort={this.handleSort}
                onDelete={this.deleteItem}
              />
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
