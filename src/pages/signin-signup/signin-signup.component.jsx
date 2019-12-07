import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/Signup/signUp.component'
import './signin-signup.styles.scss';


const SigninSignup = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SigninSignup;