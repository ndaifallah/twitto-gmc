import { Button } from "antd";
import React, { Component } from "react";
import Postinput from "../components/Postinput";
import Postlist from "../components/Postlist";
import { connect } from "react-redux";

class Feedcontainer extends Component {
  render() {
      this.props.dispatch({type:'ISLOGGED'})
    let loginWarning = (
      <div>
        <h1>You are not logged in ! Please log in first</h1>
        <Button
          type="primary"
          onClick={() => this.props.history.push("/login")}
        >
          Log in
        </Button>
      </div>
    );
    let logged = this.props.logged;
    return (
      <div
        style={{
          width: "600px",
          margin: "auto",
          marginTop: "4rem",
          border: "solid grey 1px",
          padding: "3rem",
          borderRadius: "1rem",
        }}
      >
        {!logged && loginWarning}
        {logged && (
          <div>
            {" "}
            <Postinput />
            <Postlist history={this.props.history} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logged: state.logged,
});

export default connect(mapStateToProps, null)(Feedcontainer);
