import React, { Component } from 'react'
import Postinput from '../components/Postinput'
import Postlist from '../components/Postlist'


export default class Feedcontainer extends Component {
    render() {
        return (
            <div style={{
                width:'600px',
                margin:'auto',
                marginTop:'4rem',
                padding:'3rem', background:' rgba(255, 255, 255, 0.2)',
                borderRadius:' 16px',
                boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter:' blur(5px)',
                border:' 1px solid rgba(255, 255, 255, 0.3)',
            }}>
                <Postinput/>
                <Postlist/>
            </div>
        )
    }
}
