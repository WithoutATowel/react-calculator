import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
    constructor(props) {
        super()
        this.state = {
            operation: 'add',
            valueOne: 0,
            valueTwo: 0,
            result: 0
        }
    }

    handleChange(e) {
        let newState = {}
        newState[e.target.id] = parseInt(e.target.value)
        this.setState(newState, this.updateResult)
    }

    changeOperation(e) {
        this.setState({
            operation: e.target.value
        }, this.updateResult)
    }

    updateResult() {
        let newResult = 0
        let { valueOne, valueTwo } = this.state
        switch(this.state.operation) {
            case 'add':
                newResult = valueOne + valueTwo
                break
            case 'subtract':
                newResult = valueOne - valueTwo
                break
            case 'multiply':
                newResult = valueOne * valueTwo
                break
            case 'divide':
                newResult = valueOne / valueTwo
                break
            default:
        }
        newResult = isNaN(newResult) ? '--' : newResult
        this.setState({
            result: newResult
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                 <input type="number" id='valueOne' value={this.state.valueOne} onChange={ (e) => this.handleChange(e) } />
                 <select onChange={ (e) => this.changeOperation(e) }>
                    <option value='add'>+</option>
                    <option value='subtract'>-</option>
                    <option value='multiply'>*</option>
                    <option value='divide'>/</option>
                 </select>
                 <input type="number" id='valueTwo' value={this.state.valueTwo} onChange={ (e) => this.handleChange(e) } />
                 <span>=</span>
                 <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
