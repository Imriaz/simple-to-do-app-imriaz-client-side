import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Subscriptions from '../../Subscriptions/Subscriptions';
import ShowReviews from '../ShowReviews/ShowReviews';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Subscriptions />
            <ShowReviews />
            <Footer />
        </div>

    );
};

export default Home;