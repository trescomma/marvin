import React from 'react';
import { bindActionCreators } from 'redux';
import { setEvents } from '../actions/index.js';
import { connect } from 'react-redux';
import Search from '../containers/Search.js';


class EventsPage extends React.Component{
  constructor (props) {
    super(props);
  }


  render (){
    return(
      <div>
        <div className="text-xs-center">
          <h2>Marvin</h2>
          <p className="lead">Your Intuitive Personal Butler</p>
          <p>Outsource all the hard work to Marvin who will help you organize your life and find fun things to do - minus the trouble of planning.</p>
        </div>
        <div className="row text-xs-center">
          <Search />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.events,
    user: state.user
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvents: setEvents
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);