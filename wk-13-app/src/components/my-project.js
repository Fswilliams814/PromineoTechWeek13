import React from 'react';
import NavBar from './nav-bar';
import LoginForm from './login-form';
import '../App.css';



export default class MyProject extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <br/>
                <div className='row h-100'>
                    <div className='col-sm-12 my-auto' id='form'> 
                            <LoginForm/>
                        

                    </div>
                  
                </div>
            </div>
            
      

        )
        
    }
};