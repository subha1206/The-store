import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...otherprops}) => {
    return (
        <button className='custom-button' {...otherprops}>
         {children}
        </button>
    )
}

export default CustomButton;