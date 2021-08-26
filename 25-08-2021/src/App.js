// import './App.css';
import Navbar from './components/Navbar.js';
import MultiForm from './components/MultiForm.js'
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
      <MultiForm/>
    </>
  );
}

export default App;

