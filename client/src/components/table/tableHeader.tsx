import * as React from "react";
import { IColumns, orderType, ISortColumn } from "../../interfaces";

export interface TableHeadProps {
  columns: IColumns[];
  onSort: (sortColumn: ISortColumn) => void;
  sortColumn: ISortColumn;
}

export interface TableHeadState {}

class TableHead extends React.Component<TableHeadProps, TableHeadState> {
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
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.key} onClick={() => this.raiseSort(column.key)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
