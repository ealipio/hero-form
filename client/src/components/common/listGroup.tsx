import * as React from "react";
import { IGenre } from "../../interfaces";

export interface ListGroupProps {
  items: IGenre[];
  textProperty: string;
  valueProperty: string;
  selectedGenre: IGenre;
  onItemSelect: (g: IGenre) => void;
}

export interface ListGroupState {}

class ListGroup extends React.Component<ListGroupProps, ListGroupState> {
  render() {
    const {
      items,
      textProperty,
      valueProperty,
      onItemSelect,
      selectedGenre,
    } = this.props;

    return (
      <ul className="list-group">
        {items.map((i: any) => (
          <li
            key={i[valueProperty]}
            className={
              i._id === selectedGenre._id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(i)}
          >
            {i[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
