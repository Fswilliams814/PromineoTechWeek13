import React from 'react';
//import './App.css';


  
  export default class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { showNav: true }; //this will set the state of the showing the Nav to true
        this.toggleNav = this.toggleNav.bind(this);
    }
    //this method will all you to click on the navbar toggler icon and switch the state
    toggleNav() {
      this.setState({ 
          showNav: !this.state.showNav
      })
  }
  
  render() {
      const { showNav } = this.state //sets the nav bar open upon the app starting
      
      return (
      <div className="navbar navbar-expand-lg navbar-light bg-light" id='navBar'>
          <a className="navbar-brand" href="#">FDB WELLNESS</a>
          <button className="navbar-toggler" type="button" onClick={this.toggleNav}>
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'}>
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled" href="#">Transformations</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled" href="#">Products</a>
                  </li>
                  
                  
              </ul>
          </div>
      </div>
      );
  }
}

// const App = () => {
// return (
//    <Navbar />
// );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )

