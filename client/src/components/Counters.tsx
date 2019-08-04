import * as React from 'react';
import Counter from './Counter';

interface ICounter {
  id: number;
  value: string;
}

export interface CountersProps {}

export interface CountersState {
  counters: ICounter[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  constructor(props: CountersProps) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 'angular' },
        { id: 1, value: 'python' },
        { id: 2, value: 'golang' },
        { id: 3, value: 'javascript' },
        { id: 4, value: 'vue' },
        { id: 5, value: 'react' },
        { id: 6, value: 'lambda functions' },
        { id: 7, value: 'API Gateways' }
      ]
    };
  }

  handleDelete = (counterID: number) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  handleReverse = (counter: ICounter) => {
    const counters = [ ...this.state.counters ];
    const reverse = counter.value
      .split('')
      .reverse()
      .join('');
    const newCounters = counters.map(c => {
      if (c.id === counter.id) {
        c.value = reverse;
      }
      return c;
    });
    console.log({counters, newCounters});
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c: ICounter) => {
      c.value = '';
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onReverse={this.handleReverse}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
