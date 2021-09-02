import './App.css';
// import Navbar from './components/Navbar.js'
// import About from './components/About';
// import Shop from './components/Shop'
// import ShopProducts from './components/ShopProducts';

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, ISLOGGED } from './actions/index';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// // import News from './components/News';

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Navbar RandomText="Mayank - Addweb Solution" />
// //         <News/>
// //       </div>
// //     )
// //   }
// // }


//   export default function App(){    
//     return (
//       <>

//       <Router>
//       <div>
//         <Navbar RandomText="Mayank - Addweb Solution" />
//         <Switch>
//         <Route path="/" exact />
//         <Route path="/about" component={About}/>
//         <Route path="/shop" exact component={Shop}/>
//         <Route path="/shop/:id" component={ShopProducts}/>
//         </Switch>
//       </div>
//       </Router>
//       {/* <div className="container my-3">
//         <h2>This Is A Home Page</h2>
//       </div> */}
//       </>
//     );
//   }
import store from './store'

export default function App(){
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  // console.log(store.getState().counter)
  const storeStates = () =>{
    const latestState = store.getState().counter;
    console.log(latestState)
}

store.subscribe(storeStates);

// unsubscribe();

  // console.log(store.getState())
  return (
    <div className="container">
      <h1 className="text-muted text-center mxx-auto">Counter {counter}</h1>
      {isLogged? <h2 className="blockquote-footer text-center mt-3">Valuable Info Is Here!!!!</h2>:null}
      <div className="text-center">
      <button className="btn btn-lg btn-primary mx-3" onClick={()=>dispatch(INCREMENT())}>+</button>
      <button className="btn btn-lg btn-danger me-3" onClick={()=>dispatch(DECREMENT())}>-</button>
      <button className="btn btn-lg btn-success" onClick={()=>dispatch(ISLOGGED())}>{isLogged? "Hide Info" : "Show Info"}</button>
      </div>
      
    </div>
  )
}