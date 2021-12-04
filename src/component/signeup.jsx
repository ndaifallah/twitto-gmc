import React, { Component } from "react";
import "antd/dist/antd.css";

import { Form, Input, Button, Checkbox } from "antd";

class Signeup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gmail: "",
      username: "",
      password: "",
    };
  }
 

  signup = async (user,password) => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: user,
          password: password,
        })
    };
    let response = await fetch("http://localhost:780/signup", options);
    console.log(response)
    if(response.status==200){
      this.props.history.push('/login',[])
    }
  }

  // onFinish(values) {
  //   console.log("Success:", values);
  // }
  // onFinish(values) {
  //   console.log("Success:", values);
  // }
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              style={{ width: 200 }}
              onChange={(e) => this.setState({ gmail: e.target.value })}
              value={this.state.gmail}
            />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            style
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              style={{ width: 200 }}
              onChange={(e) => this.setState({ username: e.target.value })}
              value={this.state.username}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              style={{ width: 200 }}
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.passwrod}
            />
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
            <Button type='primary' onClick={()=>this.signup(this.state.username,this.state.password)}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Signeup;
