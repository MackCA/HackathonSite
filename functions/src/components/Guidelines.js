import React, {Component} from 'react';


class Guidelines extends Component {
  render() {
    return (
        <section className="section-rules">
          <div className="row">
            <h2>Competition Guidelines</h2>
            <p className="long-copy">
              SCCC's Computer Science department is holding it's first Hackathon - here's how it works.
            </p>
          </div>
          <div className="row">
            <div className="col span-1-of-4 box">
              <ion-icon name="people" className="icon-big"/>
              <h3>Teamwork</h3>
              <p>Form a team of up to 4 members to collaborate on a joint project. You can also go solo if thats your style.
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <ion-icon name="bulb" className="icon-big"/>
              <h3>Creativity is Key</h3>
              <p>The theme for this event is creativity in coding. This gives you wide latitude to build what motivates you.
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <ion-icon name="microphone" className="icon-big"/>
              <h3>Presentation</h3>
              <p>You will present your project in front of a general audience. The audience will then fill out a poll about
                your project. Your project will be judged by the CS Professors.
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <ion-icon name="ribbon" className="icon-big"/>
              <h3>Sweet victory</h3>
              <p>The audience will be polled on what their favorite project was and the projects judged most highly by the
                professors will be declared winners. The winners will have the opportunity to record a video about their
                projects to be showcased on this website.
              </p>
            </div>
          </div>
        </section>
    );
  }
}

export default Guidelines