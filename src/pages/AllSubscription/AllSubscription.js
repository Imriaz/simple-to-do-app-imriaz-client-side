import React from 'react';
import { Link } from 'react-router-dom';
import './AllSubscription.css'

const AllSubscription = ({ item }) => {
    const { _id, packageName, description, notesLimit, price, img } = item;
    return (
        <div>
            <div class="col mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h1 class="card-title">{packageName}</h1>
                        <h3 class="card-text">{description}</h3>
                        <h4>Notes Limit: {notesLimit}</h4>
                        <h2>Price: {price}$ </h2>
                        <Link to={`buySubscription/:${_id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Buy Subscription</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSubscription;