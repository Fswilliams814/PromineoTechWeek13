import React from 'react'
import './App.css';

//this function means that whenever an app is created and new props or states are made or changed then it will be rendered
class SpecialBox extends React.Component {
  constructor(props){//a way of making it so that we can use all the properties of constructors at a higher level
    super(props)
    this.state = {} //all states are objects with properties //the app does not have to have a state but it will most likely always have it -  the state is the data

  }

  componentDidMount = () => {// this runs after the component mounts //only runs one time no matter what
    console.log("special box mounted");
    this.setState({clicks: 5})//another react method that you use anytime you want to change the state - cant do this.state = to change the state
  }



  render() {
   console.log(this.state)
    //JXS similar to HTML code has to always be wrapped in one element
    //in JXS br needs the slash
    //use curly brackets to insert JS into JSX code
    //add methods to buttons by doing onlick into JSX
    return <div className='border'>
      
     You Found the Special Box!
     <br/>

    </div>;
    
  }
}

export default SpecialBox;
