import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getProfiles } from '../../actions';
import ProfilePage from './ProfilePage';



class Profile extends React.Component {
  componentDidMount() {
  this.props.getProfiles();
  }

  render() {
    return(
      <div>
        
        <h2>Profile Page</h2>
        {this.props.fetchingProfile && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}

        {this.props.profiles && (this.props.profiles.map(profile => (
          <ProfilePage profile={profile} key={profile.id} />
        )))}

        {this.props.error && <p>{this.props.error}</p>}
          
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  error: state.ProfileReducer.error,
  fetchingProfile: state.ProfileReducer.fetchingProfile,
  addingPost: state.ProfileReducer.addingPost
})

export default withRouter (
  connect(
  mapStateToProps,
  { getProfiles }
)(Profile)
);