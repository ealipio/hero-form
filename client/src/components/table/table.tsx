import * as React from "react";

import ButtonAction from "../ButtonAction";
// import TableHead from "./thead";
import Like from "../common/Like";
import { IMovie } from "../../interfaces";

export interface MoviesTableProps {
  movies: IMovie[];
  onDelete: (movie: IMovie) => void;
  onSort: (columName: string) => void;
}

const MoviesTable: React.SFC<MoviesTableProps> = props => {
  const { movies, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
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
};

export default MoviesTable;
