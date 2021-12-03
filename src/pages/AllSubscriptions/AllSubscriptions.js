import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AllSubscription from '../AllSubscription/AllSubscription';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './AllSubscriptions.css';

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const AllSubscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-ocean-09807.herokuapp.com/subscriptions')
            .then(res => res.json())
            .then(data => setSubscriptions(data))
    }, []);
    return (
        <>
            <Navigation />
            <div>
                <h2 className='text-primary mt-5'>Our Subscription Packages</h2>
            </div>
            <div className='subscriptions-container' id='subscriptions'>
                {
                    subscriptions.map(item => <AllSubscription
                        key={item._id}
                        item={item}
                    ></AllSubscription>
                    )
                }
            </div>
            <Footer />
        </>
    );
};

export default AllSubscriptions;