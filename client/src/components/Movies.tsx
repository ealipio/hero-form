import * as React from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Paginator from "./common/paginator";
import { IMovie, IGenre, ISortColumn, orderType } from "../interfaces";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./table/table";

import _ from "lodash";

export interface MovieProps {}

export interface MovieState {
  pageSize: number;
  currentPage: number;
  movies: IMovie[];
  genres: IGenre[];
  selectedGenre: IGenre;
  sortColumn: ISortColumn;
}

class Movie extends React.Component<MovieProps, MovieState> {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: { _id: "", name: "" },
    sortColumn: { path: "title", order: orderType.ASC },
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
  handleSort = (path: string) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order =
        sortColumn.order === orderType.ASC ? orderType.DESC : orderType.ASC;
    } else {
      sortColumn.path = path;
      sortColumn.order = orderType.ASC;
    }
    this.setState({ sortColumn });
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
      sortColumn,
    } = this.state;

    const filtered =
      !!selectedGenre._id && selectedGenre._id !== "allMovies"
        ? allMovies.filter((m: any) => m.genre._id === selectedGenre._id)
        : allMovies;
    // sorting
    const { path, order } = sortColumn;
    const sorted = _.orderBy(filtered, [path], [order]);
    const movies = paginate(sorted, currentPage, pageSize);

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
