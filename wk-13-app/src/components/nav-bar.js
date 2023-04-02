import React from 'react';
//import './App.css';

let r = React.createElement

export default class NavBar extends React.Component {
    render() {
      return (
        <div className='col-sm' id='navBar'>
            <a href='#'>Home</a>
            <span> </span>
            <a href='#'>Tranformations</a>
            <span> </span>
            <a href='#'>Shop</a>
        </div>
      )
    }
  }


