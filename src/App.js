import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Signeup from "./component/signeup";
import Feedcontainer from "./containers/Feedcontainer";
import { Provider } from "react-redux";
import background from "./img/background.jpg";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
import Login from "./components/login";


class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: `url(${background})`,
          // backgroundSize: "cover",
        }}
      >
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Signeup} />
              <Route exact path="/feed" component={Feedcontainer} />
              <Route exact path ='/login' component={Login}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
