
import './App.css';
import LoginContainer from './containers/loginContainer';
import { Component } from 'react';
import background from './img/background.jpg'
import Feedcontainer from './containers/Feedcontainer';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render(){

    return (
      <div style={{
        display:'flex',
        width:'100%',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:`url(${background})`,
        backgroundSize:'cover',
      }}>



      <Provider store={store}>
        <LoginContainer></LoginContainer>
        <Feedcontainer />
      </Provider>

    </div>
  );
}
}

export default App;
