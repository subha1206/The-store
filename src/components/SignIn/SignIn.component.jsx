import React from 'react';
import FromInput from '../form-input/forminput.component';
import './SignIn.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = event => {
        event.preventDefault()
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
                    <input type='submit' value='Submit From' />
                </form>
            </div>
        )
    }
}

export default SignIn;