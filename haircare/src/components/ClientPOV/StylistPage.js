import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylistId } from '../../actions';
import { MDBBtn } from "mdbreact";
import './stylist.css';
import axios from 'axios'

class StylistPage extends React.Component {
  componentDidMount() {
   const id = this.props.match.params.id;
     console.log('COMPONENT!!', id)
    this.props.getStylistId(id);
    
  axios.view(`https://hair-care.herokuapp.com/api/api/users`)
    .then(res => {
      console.log (res)
      this.setState( {Stylists:res.data})
     }); 
 }
  

  pushToStylist = (e) => {
    e.preventDefault();
    this.props.history.push('/stylists')
    }

  render() {
    const { stylist } = this.props.stylistPerson;
    return(
      <div>
          
        {stylist === undefined ? (
          <Loader type="Puff" color="#ffb900" height="60" width="60" />
        ) : (
          <div>
           
            <h1 className="portfolio-page-title">
              <span className="portfolio-name">{stylist.username}'s</span> P O R T F O L I O{" "}
            </h1>
            <div className="portfolio-container">
              <img
                src={stylist.profile_img}
                alt={stylist.username}
                className="portfolio-img"
              />
              <p className="portfolio-skills title">I am best at: </p> <br />
              <span className="portfolio-skills"> {stylist.skills} </span>
            </div>
            {stylist.posts.map(post => {
              return (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <img src={post.posts_image} alt={post.username} />
                  <p>{post.description}</p>
                </div>
              );
            })}
            <MDBBtn color="red" onClick={this.pushToStylist}>Back</MDBBtn>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  stylistPerson: state.StylistReducer.stylistPerson,
  fetchingStylists: state.StylistReducer.fetchingStylists
})
export default withRouter (
  connect(
  mapStateToProps,
  { getStylistId }
)(StylistPage)
);
//https://source.unsplash.com/400x400/collection/391411