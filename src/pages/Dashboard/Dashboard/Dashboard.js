import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import CreateNotes from '../CreateNotes/CreateNotes';
import MyNotes from '../MyNotes/MyNotes';
import DeleteAccount from '../DeleteAccount/DeleteAccount'
import EditUserProfile from '../EditUserProfile/EditUserProfile';
import DeleteAdminAccount from '../DeleteAdminAccount/DeleteAdminAccount';
import AllUsers from '../AllUsers/AllUsers';
import EditAdminProfile from '../EditAdminProfile/EditAdminProfile'
import AddSubscription from '../AddSubscription/AddSubscription';
import ManageAllSubscription from '../ManageAllSubscription/ManageAllSubscription'
import MySubscriptions from '../MySubscriptions/MySubscriptions';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const { user, logout, admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
                <Button color="inherit">Home</Button>
            </Link>
            {!admin &&
                <Box>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/createNotes`}>
                        <Button color="inherit">Create Notes</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myNotes`}>
                        <Button color="inherit">My Notes</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}>
                        <Button color="inherit">Review</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/BuySubscription`}>
                        <Button color="inherit">Buy Subscription</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/editUserProfile`}>
                        <Button color="inherit">Edit Profile</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/deleteAccount`}>
                        <Button color="inherit">Delete Account</Button>
                    </Link>
                    <br />
                </Box>
            }
            <br />
            {admin &&
                <Box>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeadmin`}>
                        <Button color="inherit">Make admin</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/allUsers`}>
                        <Button color="inherit">Manage All Users</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addSubscription`}>
                        <Button color="inherit">Add Subscription</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageAllSubscription`}>
                        <Button color="inherit">All Subscription</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/editAdminProfile`}>
                        <Button color="inherit">Edit My Profile</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/deleteAdminAccount`}>
                        <Button color="inherit">Delete My Account</Button>
                    </Link>
                    <br />
                </Box>
            }
            <br />
            <List>
                {user?.email ?
                    <Box>
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </Box>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>

                }
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/createNotes`}>
                        <CreateNotes />
                    </Route>
                    <Route path={`${path}/payment/:mySubscriptionId`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/myNotes`}>
                        <MyNotes />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/BuySubscription`}>
                        <MySubscriptions />
                    </Route>
                    <Route path={`${path}/editUserProfile`}>
                        <EditUserProfile />
                    </Route>
                    <Route path={`${path}/deleteAccount`}>
                        <DeleteAccount />
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allUsers`}>
                        <AllUsers />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addSubscription`}>
                        <AddSubscription />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllSubscription`}>
                        <ManageAllSubscription />
                    </AdminRoute>
                    <AdminRoute path={`${path}/editAdminProfile`}>
                        <EditAdminProfile />
                    </AdminRoute>
                    <AdminRoute path={`${path}/deleteAdminAccount`}>
                        <DeleteAdminAccount />
                    </AdminRoute>
                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
