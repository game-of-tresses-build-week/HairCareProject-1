import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { addPost } from '../../actions';

import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class UploadPostForm extends React.Component {
  state = {
    posts: {
      stylists_id: parseInt(localStorage.getItem("userId")),
      title: "",
      posts_image: "",
      description: ""
    }
  };

  handleChange = e => {
    this.setState({
      posts: {
        ...this.state.posts,
        [e.target.name]: e.target.value
      }
    });
  };

  addNewPost = e => {
    e.preventDefault();
    this.props.addPost(this.state.posts);
    this.props.history.push("/profile");
    this.setState({
      image: "",
      description: "",
      posts_image: "",
      title: ""
    });
  };

  render() {
    console.log("POST WORKS? ", this.state.posts);
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.addNewPost}>
                  <p className="h4 text-center py-4">
                    Let's Add to your Portfolio!
                  </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Title"
                      group
                      type="text"
                      validate
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Image Url"
                      group
                      type="text"
                      validate
                      name="posts_image"
                      value={this.state.posts_image}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Description"
                      group
                      type="text"
                      validate
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="amber" type="submit">
                      {this.props.addingPost ? (
                        <Loader
                          type="ThreeDots"
                          color="#ffffff"
                          height="12"
                          width="26"
                        />
                      ) : (
                        "Update Profile"
                      )}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
const mapStateToProps = state => ({
  error: state.profileReducer.error,
  addingPost: state.profileReducer.addingPost
});
export default connect(
  mapStateToProps,
  { addPost }
)(UploadPostForm);
// //create form here for stylists to add new post to their portfolio
// //will need state, handleChange(), addNewPost(), import addPost() from actions
// //mapStateToProps here as well and connect()
// //use loader from react-loader-spinner
// //See Smurf Redux Sprint :)
// state = {
//   username: '',
//   profileImage: '',
//   about: '',
//   skills: '',
//   portfolio: ''
// }
//see trinkets api for code to addItem. addPost should be similar