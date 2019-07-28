import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylists } from '../../actions';
import StylistList from './StylistList';
import './stylist.css';

class Stylist extends React.Component {
  componentDidMount() {
    this.props.getStylists();
  }

  render() {

    return(
      <div>
        
        <h1 className="stylist-title"><i className="fas fa-map-marker-alt"></i>Stylists Near You</h1>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}

        {this.props.stylists.users && (this.props.stylists.users.map(stylist => (
            <StylistList stylist={stylist} key={stylist.id} />
        )))}

        {this.props.error && <p>{this.props.error}</p>} 

      </div>
    )
  }
}

const mapStateToProps = state => ({
  stylists: state.stylistReducer.stylists,
  error: state.stylistReducer.error,
  fetchingStylists: state.stylistReducer.fetchingStylists,
})

export default withRouter (
  connect(
  mapStateToProps,
  { getStylists }
)(Stylist)
);