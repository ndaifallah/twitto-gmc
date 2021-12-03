import React, { Component } from "react";
import { List, Avatar } from "antd";
import { connect } from 'react-redux'
import { MapStateToProps , Provider} from "react-redux";



class Postlist extends Component {
  render() {
    const data = this.props.posts
      console.log(this.props.posts)
    return (
      <div>
        <List
        style={{
          background:' rgba(255, 255, 255, 0.5)',
          borderRadius:' 16px',
          boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          webkitBackdropFilter:' blur(5px)',
          border:' 1px solid rgba(255, 255, 255, 0.3)',
          padding:'1rem'
        }}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<p> {item.title} </p>}
                description={item.content}
              />
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  
    posts:state.posts
})



export default connect(mapStateToProps, null)(Postlist)
