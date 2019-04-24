import React, {Component} from 'react';
import './resources/vendors/css/grid.css';
import './resources/vendors/css/normalize.css';
import './resources/css/style.css'
import './resources/vendors/fonts/_ionicons_svg_ios-bulb.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-mic.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-people.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-ribbon.svg';
<<<<<<< HEAD
=======
import './resources/css/style.css'
import Navbar from "./components/Navbar";
>>>>>>> parent of 417e30f... Threw header into... well... Header.
import Guidelines from "./components/Guidelines";
import Teams from "./components/Teams";

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