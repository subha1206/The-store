import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_qNcscP9v5B10OvEdwRR0wRXX00M529wzVJ'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    } 

    return(
        <StripeCheckout 
            label='Pay Now'
            name ='The Store'
            billingAddress
            shippingAddress
            currency='INR'
            image='https://sendeyo.com/up/d/f3eb2117da'
            description ={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton