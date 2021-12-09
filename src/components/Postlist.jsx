import React, { Component } from "react";
import { List, Avatar, Button } from "antd";
import { connect } from "react-redux";
import { MapStateToProps, Provider } from "react-redux";
import { Spin, Space } from "antd";

class Postlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  refrechMessages = async () => {
    try {
      this.setState({ isLoading: true });
      var resp = await fetch("http://localhost:780/getallposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AuthToken: JSON.parse(localStorage.getItem("TOKEN")),
        },
      });
      var data = await resp.json();
      let dispatch = this.props.dispatch;
      dispatch({
        type: "GETMESSAGES",
        payload: data,
      });
      this.setState({ isLoading: false });
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    this.refrechMessages();
    setInterval(this.refrechMessages, 8000);
  };

  logoutHandler() {
    localStorage.removeItem("TOKEN");
    this.props.history.push("/login");
  }

  render() {
    const data = this.props.posts;
    let loading = this.state.isLoading;
    return (
      <div>
        {loading && (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        )}
        {!loading && (
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
        )}
        ,
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("TOKEN");
            this.props.history.push("/login");
          }}
        >
          Log out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, null)(Postlist);
