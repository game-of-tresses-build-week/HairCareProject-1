import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { newAccount } from '../actions';
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
  state = {
    users: {
      email: '',
      password: '',
      stylist: ''
    }
  }

  handleChange = e => {
    this.setState({
      users: {
        ...this.state.stylists,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewAccount = e => {
    e.preventDefault();
    this.props.newAccount(this.state.stylists)
    .then(res => {
      if(res) {
        this.props.history.push('/login')
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

  render() {
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.addNewAccount}>
                  <p className="h4 text-center py-4">Let's create your account</p>
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
                    <p>Are you a stylist?:</p>
                    <div 
                      className="custom-control custom-radio custom-control-inline">
                      <input 
                        type="radio" 
                        className="custom-control-input" 
                        name="stylist"
                        onChange={this.userStylist}
                        value={this.state.stylist}
                        // checked={this.state.stylist} 
                      />
                      <label 
                        className="custom-control-label" 
                        htmlFor="defaultInline2">
                        Stylist Yes
                      </label>
                    </div>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="amber" type="submit">
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
export default connect (
  mapStateToProps,
  { newAccount }
) (RegisterPage);