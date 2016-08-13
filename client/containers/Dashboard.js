import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MusicPlayer from '../components/music/MusicPlayer'
import Lights from '../components/lights/Lights'

const components = [
  { title: 'Music Player',      component: <MusicPlayer />, boot: 'col-xs-6' },
  { title: 'Saved Events',      component: null ,           boot: 'col-xs-6' },
  { title: 'Reminders',         component: null ,           boot: 'col-xs-6' },
  { title: 'Todays Weather',    component: null ,           boot: 'col-xs-6' },
  { title: 'Interests',         component: null ,           boot: 'col-xs-6' },
  { title: 'To-do List',        component: null ,           boot: 'col-xs-6' },
  { title: 'Calendar',          component: null ,           boot: 'col-xs-6' },
  { title: 'Wellness Tracker',  component: null ,           boot: 'col-xs-6' },
  { title: 'Arduino',           component: null ,           boot: 'col-xs-6' },
  { title: 'Lights',            component: <Lights /> ,           boot: 'col-xs-6' },
  { title: 'Payment Reminders', component: null ,           boot: 'col-xs-6' }
];

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {
          components.map(comp => {
          return (
            <div className={ comp.boot }> { comp.title }
              <div> { comp.component } </div>
            </div>
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

