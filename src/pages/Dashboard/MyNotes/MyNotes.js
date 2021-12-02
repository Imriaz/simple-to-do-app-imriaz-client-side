import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyNotes = () => {
    const { user } = useAuth();
    const [myNotes, setMyNotes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myNotes/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyNotes(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteMyNotes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingNotes = myNotes?.filter(myNote => myNote._id !== id);
                        setMyNotes(remainingNotes);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My Notes</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Notes No</th>
                        <th>Title</th>
                        <th>Notes</th>
                        <th>Date</th>
                        {/* <th>Creator Name</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                {myNotes?.map((allNote, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allNote?.Title}</td>
                            <td>{allNote?.Notes}</td>
                            <td>{allNote?.Date}</td>
                            {/* <td>{allNote?.name}</td> */}
                            <button onClick={() => (allNote?._id)} className="btn bg-danger p-2 m-1">Edit</button>
                            <button onClick={() => handleDelete(allNote?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyNotes;