import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResultsPageEntry from '../components/ResultsPageEntry';
const Loader = require('react-loader');



class ResultsPage extends React.Component{
  constructor(props){
    super(props);

  }

    componentWillMount() {
    this.setState({
      loaded: false
    });
  }



  componentWillReceiveProps(){
    this.setState({
      loaded: true
    });
  }

  render(){

  let options = {
    lines: 17,
    length: 28,
    width: 2,
    radius: 36,
    corners: 1,
    opacity: .05,
    rotate: 0,
    direction: 1,
    color: 'black',
    speed: 1,
    trail: 100,
    shadow: false,
    hwaccel: false,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    scale: 1.00
    };

    return(
      <div>
       <Loader loaded={this.state.loaded} options={options} className="spinner" />
        {this.props.events.map((event)=>
          <ResultsPageEntry event={event} />
          )}
      </div>
      )
  }

}

function mapStateToProps (state) {
  return {
    events: state.events
  };
};


export default connect(mapStateToProps)(ResultsPage);