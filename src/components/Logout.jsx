import React, { Component } from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class Logout extends Component {
   
    render() {
        return (
            <div style={{
                display:'flex',
                position:'fixed',
                top:'10px',
                right:'10px'
            }}>
                <Button
            shape="circle"
            type="primary"
            icon={<PoweroffOutlined />}
            onClick={''}
            
          />
            </div>
        )
    }
}

export default Logout