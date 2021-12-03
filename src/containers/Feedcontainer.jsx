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
                border:'solid grey 1px',
                padding:'3rem',
                borderRadius:'1rem'
            }}>
                <Postinput/>
                <Postlist/>
            </div>
        )
    }
}
