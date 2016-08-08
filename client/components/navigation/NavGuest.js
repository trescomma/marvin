import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';


export default (props) => (
  <div>

<nav className="navbar navbar-light">
  <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
    &#9776;
  </button>
  <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">

    <Link className="navbar-brand" to="/">MARVIN</Link>
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Search</Link>
      </li>
      <li className="nav-item">
        <LoginLink className="nav-link">Login</LoginLink>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/register">Register</Link>
      </li>

    </ul>
  </div>
</nav>

</div>

)


