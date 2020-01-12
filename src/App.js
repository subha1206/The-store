import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.comonents';
import ShopPage from './pages/shop/shop.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })   
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }

     })
   }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
