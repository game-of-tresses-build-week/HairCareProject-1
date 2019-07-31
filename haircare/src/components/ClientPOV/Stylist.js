import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylists } from '../../actions';
import StylistList from './StylistList';
import './stylist.css';
import axios from 'axios'
class Stylist extends React.Component {
  componentDidMount() {
   // this.props.getStylists();
   axios.get(`https://hair-care.herokuapp.com/api/users/:id`)
    .then(res => {
      console.log (res)
      this.setState( {Stylists:res.data})
    });
  }
  render() {

    return(
      <div>
        
        <h1 className="stylist-title"><i className="fas fa-map-marker-alt"></i>Stylists Near You</h1>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}

       {this.props.stylist && (this.props.stylist.map(stylist => (
           <StylistList stylist={stylist} key={stylist.id} />
       )))}

        {this.props.error && <p>{this.props.error}</p>} 

      </div>
    )
  }
}

const mapStateToProps = state => ({
  Stylists: state.StylistReducer.Stylists,
  error: state.StylistReducer.error,
  fetchingStylists: state.StylistReducer.fetchingStylists,
})

export default withRouter (
  connect(
  mapStateToProps,
  { getStylists }
)(Stylist)
);