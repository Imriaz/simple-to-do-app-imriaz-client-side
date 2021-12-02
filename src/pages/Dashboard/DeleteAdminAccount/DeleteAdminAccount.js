import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DeleteAdminAccount = () => {
    const { user, deleteUserAccount } = useAuth();
    const [User, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/manageAllUsers/${user?.email}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteUserAccount/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        deleteUserAccount();
                        alert("User Deleted Successfully");
                    }
                });
        }
    };
    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        {/* <th>Action</th> */}
                        <h1 className='bg-danger'>Are you want to delete your account?</h1>
                    </tr>
                </thead>
                {User?.map((MyUser) => (
                    <tbody>
                        <tr>
                            <button onClick={() => handleDelete(MyUser?._id)} className="btn bg-danger text-light p-2 m-3">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default DeleteAdminAccount;