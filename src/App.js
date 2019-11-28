import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.comonents';
import ShopPage from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })    
     })
   }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninSignup} />
        </switch>
      </div>
    );
  }
}

export default App;
