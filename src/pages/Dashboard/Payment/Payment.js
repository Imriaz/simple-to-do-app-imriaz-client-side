import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PayPal from './PayPal';

const Payment = () => {
    const { mySubscriptionId } = useParams();
    const [mySubscription, setMySubscription] = useState({});
    const [checkout, setCheckout] = useState(false);

    useEffect(() => {
        fetch(`https://afternoon-ocean-09807.herokuapp.com/orders/${mySubscriptionId}`)
            .then(res => res.json())
            .then(data => setMySubscription(data));
    }, [mySubscriptionId])


    return (
        <div>
            <h1 className='text-info'>Please Pay: {mySubscription.price}$ for {mySubscription.packageName} Package</h1>
            <br />
            <h3>Total Pay: {mySubscription.price}</h3>
            <br />
            {checkout ? (
                <PayPal />
            ) : (
                <button onClick={() => {
                    setCheckout(true);
                }}>
                    Checkout</button>
            )
            }
        </div>
    );
};

export default Payment;