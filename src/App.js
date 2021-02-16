import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Route to="/" exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;
