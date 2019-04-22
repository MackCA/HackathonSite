import React, {Component} from 'react';
import SCCC_LOGO from '../resources/img/SCCC_LOGO_WHITE_150.png';

class Navbar extends Component {
  render() {
    return (
        <nav>
          <div className="row">
            <img src={SCCC_LOGO} alt="SCCC Logo" className="logo"/>
              <ul className="main-nav">
                <li><a href="#">Teams</a></li>
                <li><a href="#">Rules</a></li>
                <li><a href="#">Information</a></li>
              </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;