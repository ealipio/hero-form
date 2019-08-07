import * as React from 'react';
import './Counter.css';
interface ICounter {
  id: number;
  value: string;
}

export interface CounterProps {
  counter: ICounter;
  onDelete: (counterID: number) => void;
  onUpper: (counter: ICounter) => void;
  onReverse: (counter: ICounter) => void;
}

export interface CounterState {
  value: string;
}

class Counter extends React.Component<CounterProps, CounterState> {
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    console.log('Counter => componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('::Counter => Unmount');
  }
  handleDelete = () => {};
  render() {
    console.log('=> Counter rendered');
    return (
      <div>
        <span className="badge m-2 badge-warning counter-label">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onUpper(this.props.counter)}
          className="btn btn-dark btn-sm m-2"
        >Upper</button>        
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
}

export default Counter;
