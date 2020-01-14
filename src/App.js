import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.comonents';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'

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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render= {() => this.props.currentUser ? (<Redirect to='/' />) : <SigninSignup />} />
          <Route exact path='/checkout' component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
