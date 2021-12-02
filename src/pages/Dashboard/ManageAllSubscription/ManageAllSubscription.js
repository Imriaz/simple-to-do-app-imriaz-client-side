import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllSubscription = () => {
    const { user } = useAuth();
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/manageAllSubscription`)
            .then(res => res.json())
            .then(data => setSubscriptions(data));
    }, [subscriptions]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteSubscription/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingSubscriptions = subscriptions?.filter(subscription => subscription._id !== id);
                        setSubscriptions(remainingSubscriptions);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My All Subscription</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Notes Limit</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {subscriptions?.map((subscription, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{subscription?.packageName}</td>
                            <td>{subscription?.description}</td>
                            <td>{subscription?.notesLimit}</td>
                            <td>{subscription?.price}</td>
                            <td><img style={{ height: '50px', width: '50px' }} src={subscription?.img} alt='' /></td>
                            <button onClick={() => handleDelete(subscription?._id)} className="btn bg-danger p-2 m-1">Edit</button>
                            <button onClick={() => handleDelete(subscription?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllSubscription;