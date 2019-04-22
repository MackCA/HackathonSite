import React, {Component} from 'react';
import Navbar from "./components/Navbar";
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