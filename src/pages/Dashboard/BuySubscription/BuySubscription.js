import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './BuySubscription.css'

const BuySubscription = () => {
    const { subscriptionId } = useParams({});
    const [subscription, setSubscription] = useState({});

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/subscriptions')
            .then(res => res.json())
            .then(data => {
                const orderSubscription = data.find(singleOrder => singleOrder._id == subscriptionId)
                setSubscription(orderSubscription);
                // reset(orderPackage);
            })
    }, [subscriptionId]);

    const onSubmit = data => {
        data.email = user?.email;
        // data.status = 'Pending';
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Subscription Ordered successfully');
                    reset();
                }
            });
    }
    return (
        <>
            <Navigation />
            <div className="review-section">
                <div className="row">
                    <div class="card col-lg-6 col-sm-12 mb-5 mt-5 item-part">
                        <img src={subscription.img} class="details-image" alt="..." />
                        <div class="card-body">
                            <h2 class="card-title text-info">{subscription.packageName}</h2>
                            <h5 class="card-text">{subscription.description}</h5>
                            <h4 class="card-text text-info">Notes Limit: {subscription.notesLimit}</h4>
                            <h3 class="card-text text-info">Price: ${subscription.price}</h3>
                        </div>
                    </div>

                    {/* Form Start here */}
                    <div className="col-lg-6 col-sm-12">
                        <h1 className="mt-5 text-center text-info">Please Provide your Information for Order</h1>
                        <div className="login-box w-25 m-auto mt-5">
                            <div className="package-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input readOnly defaultValue={subscription?.packageName}
                                            {...register("packageName", { required: true })}
                                            placeholder="Subscriptions Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.displayName}
                                            {...register("displayName", { required: true })}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input readOnly defaultValue={user?.email}
                                            {...register("email", { required: true })}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input readOnly defaultValue={subscription?.notesLimit}
                                            {...register("notesLimit", { required: true })}
                                            placeholder="Notes Limit"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input readOnly defaultValue={subscription?.price}
                                            {...register("price", { required: true })}
                                            placeholder="Price"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("date")}
                                            placeholder="Date"
                                            type="date"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("address", { required: true })}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("phone", { required: true })}
                                            placeholder="Phone Number"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Subscribe" className="btn btn-info w-75" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BuySubscription;