import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MySubscriptions = () => {
    const { user } = useAuth();
    const [mySubscriptions, setMySubscriptions] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-ocean-09807.herokuapp.com/mySubscriptions/${user?.email}`)
            .then(res => res.json())
            .then(data => setMySubscriptions(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://afternoon-ocean-09807.herokuapp.com/deleteMySubscription/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingSubscriptions = mySubscriptions?.filter(MySubscription => MySubscription._id !== id);
                        setMySubscriptions(remainingSubscriptions);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My Subscriptions</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Subscriptions Name</th>
                        <th>Notes Limit</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {mySubscriptions?.map((allSubscription, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allSubscription?.packageName}</td>
                            <td>{allSubscription?.notesLimit}</td>
                            <td>{allSubscription?.email}</td>
                            <td>{allSubscription?.price}</td>
                            <td>{allSubscription?.payment ? 'Paid' :
                                <Link to={`/dashboard/payment/${allSubscription._id}`}><button className="btn bg-warning py-1 px-2">Pay</button></Link>
                            }</td>
                            <button onClick={() => handleDelete(allSubscription?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MySubscriptions;