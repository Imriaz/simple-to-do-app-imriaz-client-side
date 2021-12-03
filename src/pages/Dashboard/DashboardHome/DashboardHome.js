import { Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AllUsers from '../AllUsers/AllUsers';
import MyNotes from '../MyNotes/MyNotes';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    {admin ? <AllUsers /> :
                        <MyNotes />}
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;