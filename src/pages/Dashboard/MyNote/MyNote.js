import React, { useState } from 'react';
import Modal from 'react-modal';

const MyNote = ({ note, index, myNotes, setMyNotes, needUpdate, setNeedUpdate }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [data, setData] = useState({})

    function openModal() {
        setModalIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const handleBlur = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/updateNote/${note._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                closeModal();
                setNeedUpdate(!needUpdate);
            })
    }

    const updateNote = (id) => {

    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px'
        }
    };

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
        <tr>
            <td>{index + 1}</td>
            <td>{note?.Title}</td>
            <td>{note?.Notes}</td>
            <td>{note?.Date}</td>
            {/* <td>{allNote?.name}</td> */}
            <button onClick={() => openModal()} className="btn bg-danger p-2 m-1">Edit</button>
            <button onClick={() => handleDelete(note?._id)} className="btn bg-danger p-2 m-1">Delete</button>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 className="text-center">'Update todo'</h2><br />
                    <form onSubmit={handleSubmit}>
                        <h4>Title</h4>
                        <input className="form-control" onBlur={handleBlur} type="text" defaultValue={note?.Title} name="Title" required /> <br />
                        <h4>Description</h4>
                        <textarea rows="5" className="form-control" onBlur={handleBlur} type="text" defaultValue={note?.Notes} name="description" required /><br />
                        <button className="btn btn-primary">Update</button>
                    </form>
                </Modal>
            </div>

        </tr>
    );
};

export default MyNote;