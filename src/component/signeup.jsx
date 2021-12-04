import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox } from 'antd';


 class Signeup extends Component {
    constructor(props){
        super(props);
        this.state = {
            gmail: "",
            username:"",
            password:""

        };
    }
    sendforstockage = async (sign) => {
        
      let options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              user_name: this.state.username,
              password: this.state.password,
          })
      };
     let data= await fetch("192.168.1.32:780/signup", options);
     let response= await data.json()
     console.log(response)
  }
    






      onFinish(values){
        console.log('Success:', values)
        this.sendforstockage()
      }
    onFinish(values){
        console.log('Success:', values);
      }
    render() {
        
        return (
 <div>
 
 <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
      autoComplete="off"
    > 
    
      <Form.Item
        label="gmail"
        name="your mail"
        style
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  style={{width:200}}  onChange={e => this.setState({  gmail: e.target.value})}  value={this.state.gmail} />

      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        style
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  style={{width:200}}   onChange={e => this.setState({  username: e.target.value})}  value={this.state.username} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  style={{width:200}}  onChange={e => this.setState({ passwrod : e.target.value})}  value={this.state.passwrod} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"   onClick={() => this.sendforstockage}
                >
          Submit
        </Button>
      </Form.Item>
    </Form>
 </div>
  
);
            
        
    }
}







export default Signeup