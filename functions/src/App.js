import React, {Component} from 'react';
import './resources/vendors/css/grid.css';
import './resources/vendors/css/normalize.css';
import './resources/css/style.css'
import './resources/vendors/fonts/_ionicons_svg_ios-bulb.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-mic.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-people.svg';
import './resources/vendors/fonts/_ionicons_svg_ios-ribbon.svg';
import Guidelines from "./components/Guidelines";
import Teams from "./components/Teams";
import Header from "./components/Header";

class App extends Component {
  state = {
    trigger: false
  }

  render() {
    return(
        <body>
          <Header/>
          <Guidelines/>
          <Teams/>
        </body>
    );
  }
}

export default App;