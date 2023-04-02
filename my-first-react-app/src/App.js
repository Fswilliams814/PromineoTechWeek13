import React from 'react';
import SpecialBox from './SpecialBox';
import ReallySpecialBox from './ReallySpecialBox';

//this function means that whenever an app is created and new props or states are made or changed then it will be rendered
class App extends React.Component {
  constructor(props){//a way of making it so that we can use all the properties of constructors at a higher level
    super(props)
    this.state = { clicks: 0} //all states are objects with properties //the app does not have to have a state but it will most likely always have it -  the state is the data

  }

  componentDidMount = () => {// this runs after the component mounts //only runs one time no matter what
    console.log("app component mounted");
    this.setState({clicks: 5})//another react method that you use anytime you want to change the state - cant do this.state = to change the state
  }

  addClick = () => {
    var newNumber = this.state.clicks +1;
    this.setState({clicks: newNumber})
  }

  resetClicks = () => {
    console.log("tests");
    this.setState({clicks : 0})
  }


  render() {
    console.log("render");
    //another way to add the special box using JSX code

    if(this.state.clicks > 20) {
      //passing in a prop into really special box
      var newBox = <ReallySpecialBox resetClicks={this.resetClicks} clicks={this.state.clicks}/>//working out the code outside the JSX and then using the variable inside the JSX code
    }
    //JXS similar to HTML code has to always be wrapped in one element
    //in JXS br needs the slash
    //use curly brackets to insert JS into JSX code
    //add methods to buttons by doing onlick into JSX
    return( <div>
      <h3 className='border'>Log In</h3>
      <div className='form-group'>
           <label for="name">Username:</label><br/>
           <input className='form-control form-control-sm' type="text" id="name" placeholder="Enter username"/>
           </div><br/>
           <div className='form-group'>
            <label for="password">Password:</label><br/>
            <input className='form-control form-control-sm' type="text" id="password" placeholder="Enter password"/>
            </div><br/><br/>
      <div>Clicks: {this.state.clicks} </div>
      <br/>
      <button className={`btn btn-secondary`} onClick={this.addClick}>Submit</button>
      <br/>
      {this.state.clicks > 10 ? <SpecialBox/> : ""}
      {newBox}
     

    </div>
    );
  }
}

export default App;
