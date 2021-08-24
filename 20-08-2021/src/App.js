// import './App.css';
// import FormOne from './components/FormOne.js';
// import FormTwo from './components/FormTwo.js';
// import FinalOutput from './components/FinalOutput.js';
// import FormThree from './components/FormThree.js';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import FinalOuput from './components/FinalOutput.js';

function App() {
  return (
    <>
      <Router>
        <Navbar RandomText="Addweb Solution - Random Text" />
      </Router>

        {/* <Switch>
          <Route exact path="/">
            <FormOne/>
          </Route>
          <Route exact path="/FormOne">
            <FormOne/>
          </Route>
          <Route exact path="/FormTwo">
            <FormTwo></FormTwo>
          </Route>
          <Route exact path="/FormThree">
            <FormThree></FormThree>
          </Route>
          <Route exact path="/FinalOutput">
            <FinalOuput/>
          </Route>
        </Switch>
      </Router> */}
      <Form></Form>
    </>
  );
}

export default App;
