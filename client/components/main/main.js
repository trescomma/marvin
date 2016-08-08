import React from 'react';
import Search from '../../containers/Search.js'
import Nav from '../navigation/Nav'


export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
      <Nav />
      <div className="top">
        <div className="row">
          {this.props.children}
        </div>
      </div>
      </div>
      )
  }

}