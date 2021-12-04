import React, { Component } from "react";
import { List, Avatar } from "antd";
import { connect } from 'react-redux'
import { MapStateToProps , Provider} from "react-redux";



class Postlist extends Component {
  refrechMessages = async () => {
    try{
        var resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        var data = await resp.json();
        console.log(data);
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'GETMESSAGES',
            payload: data
        })
       
    }catch (e) {
        console.log(e);
    }
}
componentDidMount = async () => {
    setInterval(() => this.refrechMessages(), 3000);
}
 
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
