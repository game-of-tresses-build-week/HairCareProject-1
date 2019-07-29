import React from 'react';
import { MDBBtn } from 'mdbreact';


class HomePage extends React.Component {

  routeToLogin = e => {
    e.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return(

      
      <div className="home-wrapper">
         <MDBBtn onClick={this.routeToLogin} color="blue" type="submit">
          LOGIN
        </MDBBtn>
        
        

        
      </div>
    )
  }
}

export default HomePage;