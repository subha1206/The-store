import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherprops}) => {
    return (
        <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherprops}>
         {children}
        </button>
    )
}

export default CustomButton;