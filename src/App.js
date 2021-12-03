
import './App.css';
import LoginContainer from './containers/loginContainer';
import { Component } from 'react';
import background from './img/background.jpg'

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
      <LoginContainer></LoginContainer>
    </div>
  );
}
}

export default App;
