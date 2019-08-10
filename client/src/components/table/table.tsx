import * as React from "react";

import ButtonAction from "../ButtonAction";
import TableHead from "./thead";
import Like from "../common/Like";
import { IMovie, ISortColumn } from "../../interfaces";

export interface MoviesTableProps {
  movies: IMovie[];
  onDelete: (movie: IMovie) => void;
  onSort: (sortColumn: ISortColumn) => void;
  sortColumn: ISortColumn;
}

export interface MoviesTableState {}

class MoviesTable extends React.Component<MoviesTableProps, MoviesTableState> {
  render() {
    const { movies, onDelete, sortColumn, onSort } = this.props;
    const columns = [
      { label: "Title", key: "title" },
      { label: "Genre", key: "genre.name" },
      { label: "Stock", key: "numberInStock" },
      { label: "Rate", key: "dailyRentalRate" },
      { label: "", key: "" },
      { label: "Action", key: "action" },
    ];
    return (
      <table className="table">
        <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
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
