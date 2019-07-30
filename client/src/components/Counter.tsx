import * as React from 'react';
import { Component } from 'react';

export interface CounterProps {
}

export interface CounterState {
    counter: number,
    imageUrl: string,
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { counter: 0, imageUrl: 'https://picsum.photos/150' };
    }
    render() {
        return <React.Fragment>
            <img src={this.state.imageUrl} style={{borderRadius: '50%'}} />
            <span> {this.formatCounter()} </span>
            <button className="btn btn-secondary">Increment</button>
        </React.Fragment>;
    }

    formatCounter() {
        const {counter} = this.state;
        return counter === 0 ? <h2>Zero</h2> : counter;
    }
}

export default Counter;