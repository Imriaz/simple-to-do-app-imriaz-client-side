import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AllUsers = () => {
    const { user } = useAuth();
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageAllUsers')
            .then(res => res.json())
            .then(data => setAllUsers(data));
    }, [allUsers?._id]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteUser/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingUsers = allUsers?.filter(allUser => allUser._id !== id);
                        setAllUsers(remainingUsers);
                    }
                });
        }
    };

    const handleStatus = (id) => {
        // const proceed = window.confirm("Are you sure, you want to Update Status?");
        // if (proceed) {
        //     fetch(`http://localhost:5000/orders/${id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(id)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.modifiedCount) {
        //                 console.log(data);
        //             }
        //         })
        // }
    };

    return (
        <div className='manageAllOrders-content'>
            <h1>Manage All Users:  {allUsers?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subscription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {allUsers?.map((allUser, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allUser?.displayName}</td>
                            <td>{allUser?.email}</td>
                            <td className='text-warning'>{allUser?.status}</td>
                            <button onClick={() => handleStatus(allUser?._id)} className="btn bg-danger p-2 m-1">Edit</button>
                            <button onClick={() => handleDelete(allUser?._id)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllUsers;