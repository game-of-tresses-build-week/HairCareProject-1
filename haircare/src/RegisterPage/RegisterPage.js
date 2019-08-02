import React from 'react';
import Loader from 'react-loader-spinner';
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { newAccount } from '../actions';
import axios from 'axios'
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn, 
  MDBCard, 
  MDBCardBody,
  // MDBFileInput, 
} from 'mdbreact';

class RegisterPage extends React.Component {
  constructor () {
    super()
    this.state = {
    users: {
      email: '',
      password: '',
      Stylist: ''
    }
  }
}
  componentDidMount() {
    axios.post(`https://hair-care.herokuapp.com/api/auth/register`)
    .then(res => {
      console.log (res)
      this.setState( {Stylist:res.data})
     });
 }
  handleChange = e => {
    this.setState({
      users: {
        ...this.state.Stylists,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewAccount = e => {
    e.preventDefault();
    this.props.newAccount(this.state.stylists)
    .then(res => {
      if(res) {
        this.props.history.push('/')
        }
      })
    this.setState({
      email: '',
      password: '',
    })
  }

  userStylist = e => {
    console.log('The btn checked: ',e)
    this.setState({
      stylist: e.target.value
    })
  }
//*
  render() {
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.addNewAccount}>
                  <p className="h4 text-center py-4">Sign Up For Your New Account</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Email"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Password"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="red" type="submit">
                        {this.props.addingStylists ? (
                          <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />) 
                            : ('Signup')}
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
  addingStylists: state.L
});
export default withRouter(
  connect (
  mapStateToProps,
  { newAccount }
) (RegisterPage,withRouter));