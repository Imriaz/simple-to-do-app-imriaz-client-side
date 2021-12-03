import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ShowReview from '../ShowReview/ShowReview';
import './ShowReviews.css';

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const ShowReviews = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-ocean-09807.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    return (
        <>
            <div>
                <h2 className='text-primary mt-5'>Review</h2>
                <br />
            </div>
            <div className='products-container' id='products'>
                {
                    products.map(item => <ShowReview
                        key={item._id}
                        item={item}
                    ></ShowReview>
                    )
                }
            </div>
        </>
    );
};

export default ShowReviews;