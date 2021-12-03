import React from 'react';
import './CreateNotes.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const CreateNotes = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = user?.email;
        data.CreatorName = user?.displayName;
        fetch('https://afternoon-ocean-09807.herokuapp.com/addNotes', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Note Added successfully');
                    reset();
                }
            });
        console.log(data);
    }


    return (
        <div className='addNotes-container'>
            <h1 className="mt-5 text-center text-info">Create Notes</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="Notes-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("Title", { required: true })}
                                placeholder="Notes Title"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("Notes", { required: true })}
                                placeholder="Notes"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("Date", { required: true })}
                                placeholder="Date"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add Note" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNotes;