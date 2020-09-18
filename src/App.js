import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51HQHqLL7KLS450bCtb3rAULp411ZoL6FEnDq9vxnJBwUJ8e7TTN33cguXbpuofMRoJ4G5RnorT83Mo0b3tFLU4eZ00EOrSir4x")
function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //will only run when the app component loads
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was  logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
        
      } else{
         // the user just logged out / the user was  logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])


  return (
    //BEM
    <Router>
      <div className="App">
        <Switch >
            <Route path="/orders">
              <Header/>
              <Orders />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={ promise } >
                <Payment/>
              </Elements> 
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
