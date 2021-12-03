import logo from './logo.svg';
import './App.css';
import Feedcontainer from './containers/Feedcontainer';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Feedcontainer />
      </Provider>
    </div>
  );
}

export default App;
