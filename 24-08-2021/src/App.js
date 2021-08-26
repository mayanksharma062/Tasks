// import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar RandomText="Addweb Solution - Random Text" />
      </Router>

      <Form/>
    </>
  );
}

export default App;

