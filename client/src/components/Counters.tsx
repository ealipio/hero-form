import * as React from 'react';
import Counter from './Counter';

interface ICounter {
  id: number;
  value: string;
}

export interface CountersProps {
  counters: ICounter[];
  onReset: () => void;
  onReverse: (counter: ICounter) => void;
  onDelete: (counterID: number) => void;
}

export interface CountersState {
  counters: ICounter[];
}

class Counters extends React.Component<CountersProps, CountersState> {

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onReverse={this.props.onReverse}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
