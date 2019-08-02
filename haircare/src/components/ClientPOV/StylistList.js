import React from 'react';
import { withRouter } from 'react-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact';
import './stylist.css';
import axios from 'axios'
class StylistList extends React.Component {
  state ={
    liked: false,
    dislike: false
  }
  componentDidMount() {
    //this.props.getStylists();
   axios.get(`https://hair-care.herokuapp.com/api/users/all`)
    .then(res => {
      console.log (res)
      this.setState( {Stylists:res.data})
     }); 
 }
  pushToStylistPage = (id) => {
      this.props.history.push(`/stylistpage/${id}`)
    }

    //thumbs up toggle
    toggleLike =() => {
      this.setState({
        liked: !this.state.liked
      })
    }

    //thumbs down toggle
    toggleDislike = () => {
      this.setState({
        dislike: !this.state.dislike
      })
    }

  render() {
    //console.log(this.props);
    return(
      <div id="stylist-list-cards">
        <MDBContainer>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://unsplash.com/collections/8263714" waves />
            <div id="post-icons">
              {this.state.liked ? 
                <i onClick={this.toggleLike} className="fas fa-thumbs-up"></i> 
                  : <i onClick={this.toggleLike} className="far fa-thumbs-up"></i> }
                  <div>
              {this.state.dislike && !this.state.liked ? 
                <i onClick={this.toggleDislike} className="fas fa-thumbs-down"></i> 
                  : <i onClick={this.toggleDislike} className="far fa-thumbs-down"></i> }
                  </div>
            </div>
            <MDBCardBody>
              <MDBCardTitle>{this.props.Stylist.username}</MDBCardTitle>
              <MDBCardText>{this.props.Stylist.about}</MDBCardText>
              <MDBCardText>Top skills: {this.props.Stylist.skills}</MDBCardText>
              <MDBBtn color="red" onClick={() => this.pushToStylistPage(this.props.Stylist.id)}>View Profile</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
         <br/>
      </div>
    )
  }
}

export default withRouter (StylistList)