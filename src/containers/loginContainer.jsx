import React, { Component } from 'react';
import Login from '../components/login';

class LoginContainer extends Component {
    render() {
        return (
            <div style={{
                width:'350px',
                height:'350px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                background:' rgba(255, 255, 255, 0.2)',
                borderRadius:' 16px',
                boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter:' blur(5px)',
                border:' 1px solid rgba(255, 255, 255, 0.3)',
            }}>
                <Login></Login>
            </div>
        )
    }
}


export default LoginContainer
