import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{
  render(){
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/dashboard">Home</Link></li>
          <li className="nav-list-item"><Link to="/landing/signin">Sign in</Link></li>
          <li className="nav-list-item"><Link to="/landing/signup">Sign up</Link></li>
        </ul>
      </nav>
    );
  }
}