import * as React from 'react';
import { Component } from 'react';

export interface CounterProps {
    
}
 
export interface CounterState {
    
}
 
class Counter extends React.Component<CounterProps, CounterState> {
    render() { 
        return ( <h1>Hello World!</h1> );
    }
}
 
export default Counter;