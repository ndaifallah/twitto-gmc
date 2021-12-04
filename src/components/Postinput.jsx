import React, { Component } from 'react'
import { Input } from 'antd';
import { Button } from 'antd'

const { TextArea } = Input;



export default class Postinput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:''
        }
    }
    async postMessage(message){
        try{
            
            await fetch('http://localhost:780/sendposts',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "AuthToken":JSON.parse(localStorage.getItem("TOKEN"))
                },
                body:JSON.stringify({
                    text:message
                })
            })
        }catch{
            console.log('Post failed')
        }
    }
    
    
    render() {
        
        console.log(this.state.message)
        return (
            <div style={{
                marginBottom:'2rem'
            }}>
                <TextArea showCount maxLength={100} style={{ height: 80 }} onChange={e=> this.setState({message:e.target.value})} value={this.state.message} />
                <Button type="primary" onClick={e=> this.postMessage(this.state.message)}>Post</Button>
            </div>
        )
    }
}
