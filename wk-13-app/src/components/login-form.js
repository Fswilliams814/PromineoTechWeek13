import React from 'react';

//create a variable that will stand for react.createElemenet
//using this becuase I will be creating multiple elements
let r = React.createElement;

//export default will allow this class to be accessible outside of the file in other JS files
export default class LoginForm extends React.Component {
    render(){
        return <div className='container'>
            <div className='container col-sm-12'>
                <div className='container'>
                <h3 className='h3'>Log In</h3>
                <br/>
                <div className='form-group'>
                <label className='h5'>Username:</label>
                <input className='form-control' placeholder='Enter Username'></input>
                <br/>
                <label className='h5'>Password:</label>
                <input className='form-control' placeholder='Enter Password'></input>
                </div>
                </div>
            </div>
        </div>
    }
}
