import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Subscription from '../Subscription/Subscription';
import './Subscriptions.css';

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/subscriptions')
            .then(res => res.json())
            .then(data => setSubscriptions(data))
    }, []);
    return (
        <>
            <div>
                <h2 className='text-primary mt-5'>Our Subscription Packages</h2>
                <br />
            </div>
            <div className='subscriptions-container' id='subscriptions'>
                {
                    subscriptions.map(item => <Subscription
                        key={item._id}
                        item={item}
                    ></Subscription>
                    )
                }
            </div>
        </>
    );
};

export default Subscriptions;