import React from 'react';
import FromInput from '../form-input/forminput.component';
import CustomButton from '../custom-button/custom-button.component';
import './SignIn.styles.scss';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = async event => {
        event.preventDefault()
        const {email, password}= this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
        } catch(error){
            console.log(error);
            
        }
        this.setState({ email: '', password: '' });
    }
    handelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FromInput name='email' label="email" type='email'
                        value={this.state.email} handelChange={this.handelChange} required />
                    <FromInput type='password' name='password' value={this.state.password} handelChange={this.handelChange} label='password' required />
                    <div className='buttonss'>
                         <CustomButton type='submit'>Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>google signin</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;