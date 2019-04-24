import React, {Component} from 'react';
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
        <header>
          <Navbar/>
          <div className="title-text-box">
            <h1>Hackathon<br/>Spring 2019</h1>
            <a className="btn btn-full" href="#">Register</a>
            <a className="btn btn-ghost" href="#">Log in</a>
          </div>
        </header>
    );
  }
}

export default Header