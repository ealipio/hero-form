import * as React from 'react';

export interface TableHeadProps {}

export interface TableHeadState {}

class TableHead extends React.Component<TableHeadProps, TableHeadState> {
  render() {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
