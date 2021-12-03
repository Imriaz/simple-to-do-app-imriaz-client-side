import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyNote from '../MyNote/MyNote';

const MyNotes = () => {
    const { user } = useAuth();
    const [myNotes, setMyNotes] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [needUpdate, setNeedUpdate] = useState(false)

    useEffect(() => {
        fetch(`https://afternoon-ocean-09807.herokuapp.com/myNotes/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyNotes(data));
    }, [needUpdate]);

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
                <tbody>
                    {myNotes?.map((note, index) =>
                        <MyNote
                            note={note}
                            index={index}
                            myNotes={myNotes}
                            setMyNotes={setMyNotes}
                            needUpdate={needUpdate}
                            setNeedUpdate={setNeedUpdate}
                        />)}
                </tbody>
            </Table>

        </div>
    );
};

export default MyNotes;