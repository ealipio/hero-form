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

  handleDelete = (event: React.MouseEvent) => {
    console.log('Event Handler');
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
