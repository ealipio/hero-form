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
  onUpper: (counter: ICounter) => void;
  onDelete: (counterID: number) => void;
}

export interface CountersState {
  counters: ICounter[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  render() {
    console.log('Counters rendered');
    const { onDelete, onReverse, onReset, onUpper, counters } = this.props;
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm btn-block m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onReverse={onReverse}
            onUpper={onUpper}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
