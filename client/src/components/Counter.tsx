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
      tags: [
        'angular',
        'python',
        'golang',
        'javascript',
        'vue',
        'react',
        'lambda functions',
        'API Gateways'
      ]
    };
    // bindings
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log('clickHandler', this);
    return (event: React.MouseEvent) => {
      console.log(event);
      event.preventDefault();
    };
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        <img
          src={this.state.imageUrl}
          style={{ borderRadius: '50%' }}
          alt="random"
        />
        <span> {this.state.counter} </span>
        <button onClick={this.clickHandler} className="btn btn-secondary">
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
