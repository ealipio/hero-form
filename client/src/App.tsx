import React from 'react';
import Counters from './components/Counters';
import NavBar from './components/Navbar';
import './App.css';

interface ICounter {
  id: number;
  value: string;
}

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    console.log('App -- constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps: AppProps, nextState: AppState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  state = {
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
  handleDelete = (counterID: number) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  handleReverse = (counter: ICounter) => {
    const counters = [...this.state.counters];
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
    this.setState({ counters: newCounters });
  };
  handleUpper = (counter: ICounter) => {
        const counters = [...this.state.counters];
        const upper = counter.value.toUpperCase();
        const newCounters = counters.map(c => {
          if (c.id === counter.id) {
            c.value = upper;
          }
          return c;
        });
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
    console.log('App render');
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <div className="container text-center">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onReverse={this.handleReverse}
            onUpper={this.handleUpper}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
