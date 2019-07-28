import React from 'react';
import Loader from 'react-loader-spinner';
// import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn, 
  MDBCard, 
  MDBCardBody 
} from 'mdbreact';

class LoginPage extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  loginChange = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(res => {
      if (res) {
        this.props.history.push('/stylists')
      }
    })
  }

  render() {
    return (
    <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.loginChange}>
                  <p className="h4 text-center py-4">Login to Your Account</p>
                  <div className="grey-text">
                    <MDBInput
                      group
                      label="Email"
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.credentials.email}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Password"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="amber" type="submit">
                        {this.props.loggingIn ? (
                          <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />) 
                            : ('Login')}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
  }
}

//import state from loginReducer & connect to component
const mapStateToProps = state => ({
  error: state.LoginReducer.error,
  loggingIn: state.LoginReducer.loggingIn
});

export default connect (
  mapStateToProps,
  { login }
) (LoginPage);