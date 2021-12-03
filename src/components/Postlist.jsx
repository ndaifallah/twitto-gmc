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
