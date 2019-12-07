import React from 'react';

import FromInPut from '../form-input/forminput.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import "./signUp.styles.scss"


 class SignUp extends React.Component {
    constructor(){
        super()
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
      handleSubmit = async event => {
          event.preventDefault();
          const {displayName,email, password, confirmPassword}=this.state;
          if(password !== confirmPassword){
              alert("Password do not match");
              return;
          }
          try{
              const{user}  = await auth.createUserWithEmailAndPassword(email, password)
             await createUserProfileDocument(user, {displayName})
             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
             })
          } catch(error){
              console.log(error);   
          }
      }

      handleChange = event => {
          const {name, value} = event.target;
          this.setState({[name]: value})
      }
    render() {
        const {displayName,email, password, confirmPassword}=this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInPut
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FromInPut
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                     <FromInPut
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                     <FromInPut
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
