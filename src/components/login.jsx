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
    
    
  
    loginfunction = async (username,password) => {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_name: username,
              password: password,
            })
        };
        let response = await fetch("http://192.168.1.32:780/login", options);
        console.log(response)
        let data= await response.json()
        console.log(data)
        localStorage.setItem('TOKEN', JSON.stringify(data.token));
        if(response.status==200){
          this.props.history.push('/feed',[])
        }
      }
    
    render() {
        console.log('username= '+this.state.username+' mdp= '+this.state.password)

            const onFinish = (values) => {
              console.log('Success:', values);
              console.log('TEST TEST TEST')
              this.loginfunction(this.state.username,this.state.password)
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
        <Button type="primary" htmlType="submit"  >
          Submit
        </Button>
        <Button type='primary' onClick={()=>this.loginfunction(this.state.username,this.state.password)}>
            test
        </Button>
      </Form.Item>
    </Form>
    
            </div>
        )
    }
    }
    
export default Login
