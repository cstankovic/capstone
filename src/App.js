import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Form} from 'antd';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ShiftForm from './ShiftForm';
import ShiftList from './ShiftList';
import ListDisplay from './ListDisplay';
import Totals from './Totals';

class App extends Component {
  constructor (){
    super();
    this.state ={
        employee:[{
            id:0,
            first_name: 'First Name',
            last_name: 'Last Name',
          },
          {
            id: 1,
            first_name: 'Courtenay',
            last_name: 'Stankovic',
        },
        {
            id: 2,
            first_name: 'Jordan',
            last_name: 'Alessi',
        },
        {
            id: 3,
            first_name: 'Brittany',
            last_name: 'Barber',
        }],
        position:[{
            id:0,
            name: 'Choose Your Position',
            maxPoints: 0,
        },
        {
            id:1,
            name: 'Captain',
            maxPoints: 6,
        },
        {
            id: 2,
            name: 'Sommelier',
            maxPoints: 5
        },
        {
            id: 3,
            name: 'Server Assistant',
            maxPoints: 2.5
        },
        {
            id: 4,
            name: 'Jr.Captain',
            maxPoints: 3
        }],
        shift:[]
    }

    this.addToShift = this.addToShift.bind(this);
  }

  addToShift(emp){
    let empCopy = Array.from(this.state.shift);
    empCopy.push(emp);

    this.setState({shift: empCopy});
}


  render(){
    return (
      <div className="App">
        
        <div>
            <ShiftForm name={this.state.employee} position={this.state.position} formSubmit= {this.addToShift} />
            <ShiftList shift = {this.state.shift} />
            <Totals shift = {this.state.shift} />
          
        </div>
      </div>
    )
  }

};

export default App;
