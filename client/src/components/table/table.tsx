import * as React from "react";

import ButtonAction from "../ButtonAction";
// import TableHead from "./thead";
import Like from "../common/Like";
import { IMovie, orderType, ISortColumn } from "../../interfaces";

export interface MoviesTableProps {
  movies: IMovie[];
  onDelete: (movie: IMovie) => void;
  onSort: (sortColumn: ISortColumn) => void;
  sortColumn: ISortColumn;
}

export interface MoviesTableState {}

class MoviesTable extends React.Component<MoviesTableProps, MoviesTableState> {
  raiseSort = (path: string) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order =
        sortColumn.order === orderType.ASC ? orderType.DESC : orderType.ASC;
    } else {
      sortColumn.path = path;
      sortColumn.order = orderType.ASC;
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th></th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: IMovie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre ? movie.genre.name : ""}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like />
              </td>
              <td>
                <ButtonAction
                  idItem={movie._id ? movie._id : ""}
                  onHeaderClick={() => onDelete(movie)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
