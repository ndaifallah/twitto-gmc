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
    async postMessage(){
        try{
            
            console.log('test')
            await fetch('https://ant.design/components/button/',{
                method:'POST',
                headers:{
                    'Content type':'application/json'
                },
                body:JSON.stringify({
                    user:'',
                    content:this.state.message
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
                <Button type="primary" onClick={this.postMessage}>Post</Button>
            </div>
        )
    }
}
