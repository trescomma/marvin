import React from 'react';
import { Link } from 'react-router';
import { LogoutLink } from 'react-stormpath';

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
        <Link className="nav-link" to="/calendar">Calendar</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard"><span className="sr-only">(current)</span>Dashboard</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/settings">Settings</Link>
      </li>

      <li className="nav-item">
        <LogoutLink className="nav-link"></LogoutLink>
      </li>

    </ul>
  </div>
</nav>

</div>

)


