import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Stylist from './ClientPOV/Stylist';
import StylistPage from './ClientPOV/StylistPage';
import ProfilePage from './StylistPOV/ProfilePage';
import UploadPostForm from './StylistPOV/UploadPostForm';
import Update from './StylistPOV/Update';
import ClientPrivateRoute from './PrivateRoutes/ClientPrivateRoute';
import StylistPrivateRoute from './PrivateRoutes/StylistPrivateRoute';
import { MDBBtn } from "mdbreact";
// import logo  from './logo.png';
// import logo2  from './logo2.png';

class Navigation extends React.Component {
  render() {
    return (
          <div>
            <div className="nav-bar">
                {/* <img src={logo} alt="logo" /> */}
                <h1 className="haircare-header">HAIRCARE</h1>
                <ul>
                  <li>
                      <Link to="/">Home</Link>
                    </li> 
                    <li>
                      <Link to="/stylists">Stylists</Link>
                    </li> 
                    <li>
                      <Link to="/profile">Profile Page</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Sign Up</Link>
                    </li>
                    <li>
                      <MDBBtn id="logout-btn" color="danger" onClick={this.logout}>logout</MDBBtn>
                    </li>
                </ul>
            </div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />

            <ClientPrivateRoute exact path="/stylists" component={Stylist} />
            <ClientPrivateRoute exact path="/stylistpage/:id" component={StylistPage} />

            <StylistPrivateRoute exact path="/profile" component={ProfilePage} />
            <StylistPrivateRoute exact path="/addnewpost" component={UploadPostForm} />
            <StylistPrivateRoute exact path="/update-post" component={Update} />          
          </div>
    );
  }
  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.props.history.push('/login');
  };

}

export default withRouter(Navigation);