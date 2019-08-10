import * as React from "react";
import { IMovie } from "../../interfaces";
import ButtonAction from "../ButtonAction";
import Like from "../common/Like";

export interface TableBodyProps {
  movies: IMovie[];
  onDelete: (movie: IMovie) => void;
}

export interface TableBodyState {}

class TableBody extends React.Component<TableBodyProps, TableBodyState> {
  render() {
    return (
      <tbody>
        {this.props.movies.map((movie: IMovie) => (
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
                onHeaderClick={() => this.props.onDelete(movie)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
