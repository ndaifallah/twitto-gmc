
import './App.css';
import LoginContainer from './containers/loginContainer';
import background from './img/background.jpg'

function App() {
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

export default App;
