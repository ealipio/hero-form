import * as React from 'react';
import { Component } from 'react';

export interface CounterProps {
    
}
 
export interface CounterState {
    
}
 
class Counter extends React.Component<CounterProps, CounterState> {
    render() { 
        return <React.Fragment>
            <h3>Hello World</h3>
            <button>Increment</button>
        </React.Fragment> ;
    }
}
 
export default Counter;