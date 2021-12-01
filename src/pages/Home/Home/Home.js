import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ShowReviews from '../ShowReviews/ShowReviews';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Blogs />
            <ShowReviews />
            <Footer />
        </div>

    );
};

export default Home;