import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Land from './landingpage/land.js';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <div>
          <Land/>
      </div>  
      </BrowserRouter>
    </Provider>
  );
}

export default App;
