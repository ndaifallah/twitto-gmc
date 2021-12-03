import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password:''
        }
    }
    
    
    async loginfunction(){
        console.log("test")
        await fetch('https://ant.design/components/form/', {
            method:'POST',
            headers:{
                'Content type' : 'application/json'
            },
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })

        })
    }
    
    render() {
        console.log('username= '+this.state.username+' mdp= '+this.state.password)

            const onFinish = (values) => {
              console.log('Success:', values);
            };
        
            const onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
            };
            
        
        return (
            <div style={{
                marginRight:'2rem',
                marginTop:'2rem',
                //display:'flex',
                //justifyContent:'center',
                //alignItems:'center',
            }}>
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        onChange={e =>this.setState({username:e.target.value})}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
       onChange={e =>this.setState({password:e.target.value})}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
        <Button type="primary" htmlType="submit" onClick={this.loginfunction} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    
            </div>
        )
    }
    }
    
export default Login