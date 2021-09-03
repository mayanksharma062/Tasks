import './App.css';

      import Navbar from './components/Navbar.js'
      import About from './components/About';
      import Shop from './components/Shop'
      import ShopProducts from './components/ShopProducts';
      import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
      
import React from 'react'

  export default function App(){    
    return (
      <>

      <Router>
      <div>
        <Navbar RandomText="Mayank - Addweb Solution" />
        <Switch>
        <Route path="/" exact />
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={ShopProducts}/>
        </Switch>
      </div>
      </Router>
      {/* <div className="container my-3">
        <h2>This Is A Home Page</h2>
      </div> */}
      </>
    );
  }
