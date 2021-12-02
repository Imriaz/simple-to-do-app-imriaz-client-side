import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from '../src/pages/Login/PrivateRoute/PrivateRoute'
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import BuySubscription from './pages/Dashboard/BuySubscription/BuySubscription';
import AllSubscriptions from './pages/AllSubscriptions/AllSubscriptions';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/subscriptions">
              <AllSubscriptions />
            </Route>
            <PrivateRoute path="/buySubscription/:subscriptionId">
              <BuySubscription />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
