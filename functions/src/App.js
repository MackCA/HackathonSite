import React, {Component} from 'react';
import './resources/vendors/css/grid.css';
import './resources/vendors/css/normalize.css';
import './resources/css/style.css'
import './resources/vendors/fonts/_ionicons_svg_ios-bulb.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-mic.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-people.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-ribbon.svg';
 HEAD
import Guidelines from "./components/Guidelines";
import Teams from "./components/Teams";

import Guidelines from "./components/Guidelines";
import Teams from "./components/Teams";
import Header from "./components/Header";
 cd65fdadc68835142d1e46bdb272d742abaa6937

class App extends Component {
  state = {
    trigger: false
  }

  render() {
    return(
        <body>
          <header>
            <Navbar/>
            <div className="title-text-box">
              <h1>Hackathon<br/>Spring 2019</h1>
              <a className="btn btn-full" href="#">Register</a>
              <a className="btn btn-ghost" href="#">Log in</a>
            </div>

          </header>
          <Guidelines/>
          <Teams/>

        </body>
    );
  }
}

export default App;