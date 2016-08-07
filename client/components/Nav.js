import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import NavUser from './NavUser';

class Nav extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    console.log('propssss', this.props.user);

    if(!this.props.user.username){
      return (
        <nav className="container-fluid">
          <button onClick={ ()=>this.forceUpdate() }>CLICK ME </button>
          <div className="row text-center navbar">
           <div className="col-md-4 col-sm-4"> MARVIN </div>
            <Link to="/"><div className="col-md-2 col-sm-2 navpad">Home</div></Link>
            <Link to="/search"><div className="col-md-2 col-sm-2 navpad line">Search</div></Link>
            <Link to="/login"><div className="col-md-2 col-sm-2 navpad line">Login</div></Link>
            <Link to="/register"><div className="col-md-2 col-sm-2 navpad">Register</div></Link>
          </div>
        </nav>
      )
    }else{
      return (
        <nav className="container-fluid">
          <NavUser />
        </nav>
      )
    }

  }
}

function mapStateToProps (state) {
  console.log('MAPSATATET',state);
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(Nav);

