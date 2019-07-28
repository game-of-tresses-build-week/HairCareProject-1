//delete btn here with the deletePost();
import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { updatePost } from "../../actions";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class Update extends React.Component {
  state = {
    post: {
      title: this.props.activePost.title,
      posts_image: this.props.activePost.posts_image,
      description: this.props.activePost.description
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [e.target.name]: e.target.value
      }
    }));
  };

  updateCurrentPost = (e) => {
    e.preventDefault();
    this.props.updatePost(this.props.activePost.id, this.state.post)
    this.props.history.push("/profile");
  }

  render() {
    console.log("PROPS IN UPDATE FORM: ", this.props.activePost);
    console.log("UPDATE FORM STATE", this.state.post);
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">
                    Let's Update your Portfolio!
                  </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Title"
                      group
                      type="text"
                      validate
                      name="title"
                      value={this.state.post.title}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Image Url"
                      group
                      type="text"
                      validate
                      name="posts_image"
                      value={this.state.post.posts_image}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Description"
                      group
                      type="text"
                      validate
                      name="description"
                      value={this.state.post.description}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn 
                      color="amber" 
                      type="submit"
                      onClick={(e) => this.updateCurrentPost(e)}
                      >
                      {this.props.updatingPost ? (
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
  updatingPost: state.profileReducer.updatingPost,
  activePost: state.profileReducer.activePost
});
export default connect(
  mapStateToProps,
  { updatePost }
)(Update);