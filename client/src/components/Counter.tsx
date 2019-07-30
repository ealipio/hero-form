import * as React from 'react';

export interface CounterProps {}

export interface CounterState {
  counter: number;
  imageUrl: string;
  tags: string[];
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      counter: 0,
      imageUrl: 'https://picsum.photos/150',
      tags: ['angular', 'python', 'golang', 'javascript', 'vue', 'react', 'lambda functions', 'API Gateways']
    };
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} style={{ borderRadius: '50%' }} alt="random"/>
        <span> {this.formatCounter()} </span>
        <button className="btn btn-secondary">Increment</button>
        <ul>
            {
                this.state.tags.map(tag => <li key={tag}> {tag} </li> )
            }
        </ul>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { counter } = this.state;
    return counter === 0 ? <h2>Zero</h2> : counter;
  }
}

export default Counter;