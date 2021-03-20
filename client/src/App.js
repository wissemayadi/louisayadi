import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux"

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

//test 
import Essai from './pages/Essai';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Profil from "./pages/Profil";
import List from "./pages/List";
import Cards from './pages/userCards';
import PrivateRoute from "./pages/PrivateRoute";

function App() {

 


  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');

  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/usercards">
          <Cards/>
        </Route>
        <Route path="/essai">
          <Essai />
        </Route>

        <Route path="/profil"component={Profil}>
          <PrivateRoute />
        </Route>

      </Switch>
    </>
  );
}

export default App;
