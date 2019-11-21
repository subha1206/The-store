import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.comonents';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninSignup} />
      </switch>
    </div>
  );
}

export default App;
