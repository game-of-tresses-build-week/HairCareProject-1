import React from 'react';
import { Route } from 'react-router-dom';

const ClientPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
       
      }}
    />
  );
};

export default ClientPrivateRoute;

//stretch if else statement to reroute client back to page
// if userType !client return not authorized

//(localStorage.getItem('token') && localStorage.getItem('userType') === 'client')