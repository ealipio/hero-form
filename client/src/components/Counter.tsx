import * as React from 'react';

interface ICounter {
  id: number;
  value: string;
}

export interface CounterProps {
  counter: ICounter;
  onDelete: (counterID: number) => void;
  onReverse: (value: ICounter) => void;
}

export interface CounterState {
  value: string;
}

class Counter extends React.Component<CounterProps, CounterState> {

  handleDelete = () => {};
  render() {
    return (
      <div>
        <span className={this.getBadgeClassName()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onReverse(this.props.counter)}
          className="btn btn-info btn-sm"
        >
          Reverse
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    return this.props.counter.value;
  }
  getBadgeClassName() {
    return 'badge m-2 badge-warning';
  }
}

export default Counter;
