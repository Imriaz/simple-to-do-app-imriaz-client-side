import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { mySubscriptionId } = useParams();
    const [mySubscription, setMySubscription] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${mySubscriptionId}`)
            .then(res => res.json())
            .then(data => setMySubscription(data));
    }, [mySubscriptionId])
    return (
        <div>
            <h1 className='text-info'>Please Pay: {mySubscription.price}$ for {mySubscription.packageName} Package</h1>
            <br />
            <h3>Total Pay: {mySubscription.price}</h3>
            <br />

        </div>
    );
};

export default Payment;