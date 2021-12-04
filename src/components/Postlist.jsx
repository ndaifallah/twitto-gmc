import React, { Component } from "react";
import { List, Avatar } from "antd";
import { connect } from 'react-redux'
import { MapStateToProps , Provider} from "react-redux";



class Postlist extends Component {
  refrechMessages = async () => {
    try{
        var resp = await fetch("http://localhost:780/getallposts",{
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "AuthToken": JSON.parse(localStorage.getItem("TOKEN"))
          },
        });
        var data = await resp.json();
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
    setInterval(this.refrechMessages,8000);
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
                title={<p> {item.user?.user_name} </p>}
                description={item.text}
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
