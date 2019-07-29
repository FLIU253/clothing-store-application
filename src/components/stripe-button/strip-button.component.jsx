import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_G1twgxNrGXuptibMsN7yWb1X00d8o92iVl';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Clothing Store'
        billingAddress
        shippingAddress
        image = 'http://svgshare.com/i/CUz.svg'
        description = {`your total is $${price}`}
        amount = {priceForStripe}
        panelLabel= 'Pay Now'
        token= {onToken}
        stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton;