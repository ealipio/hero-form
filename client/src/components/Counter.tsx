import * as React from 'react';
import { Component } from 'react';

export interface CounterProps {
}

export interface CounterState {
    counter: number
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { counter: 10 };
    }
    render() {
        return <React.Fragment>
            <span> {this.state.counter} </span>
            <button className="btn btn-secondary">Increment</button>
        </React.Fragment>;
    }
}

export default Counter;