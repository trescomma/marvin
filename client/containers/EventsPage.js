import React from 'react';
import { bindActionCreators } from 'redux';
import { setEvents } from '../actions/index.js';
import { connect } from 'react-redux';

class EventsPage extends React.Component{
  constructor (props) {
    super(props);
    this.props.setEvents('homeless man meets lamppost');
  }


  render (){
    return(
      <h2>{this.props.events[0]}</h2>
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