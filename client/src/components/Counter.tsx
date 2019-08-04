import * as React from 'react';

export interface CounterProps {
  value: string;
  id: number;
  onDelete: (event: React.MouseEvent) => void;
}

export interface CounterState {
  value: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleIncrement = () => {};
  handleDelete = () => {};
  render() {
    return (
      <div>
        <span className={this.getBadgeClassName()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-info btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    return 'zero';
  }
  getBadgeClassName() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
