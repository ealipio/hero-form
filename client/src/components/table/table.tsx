import * as React from "react";

import TableHead from "./tableHeader";
import TableBody from "./tableBody";
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
        <TableBody movies={movies} onDelete={onDelete} />
      </table>
    );
  }
}

export default MoviesTable;
