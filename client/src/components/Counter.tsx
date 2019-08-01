import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
      imageUrl: 'https://picsum.photos/100',
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
  }
  clickHandler = (event: React.MouseEvent) => {
    console.log('clickHandler', this);
    this.setState({ counter: this.state.counter + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>
            {' '}
            <FontAwesomeIcon icon={faCoffee} pull='left' />
            {tag}{' '}
          </li>
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
        <div>
          <span> {this.state.counter} </span>
          <button onClick={this.clickHandler} className="btn btn-secondary">
            Increment
          </button>
        </div>
        {this.renderTags()}
        <span className="fas fa-user-ninja" />
      </React.Fragment>
    );
  }
}

export default Counter;
