import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Guidelines from './components/Guidelines';
import '../vendors/css/grid.css'
import '../vendors/css/normalize.css'
import '../resources/css/style.css'
import Teams from "./components/Teams";

class App extends Component {
  state = {
    trigger: false
  }

  render() {
    return(
      <>
        <head>
          <title>Hackathon Spring 2019</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400" rel="stylesheet"/>
        </head>

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
      </>
    );
  }
}

export default App;