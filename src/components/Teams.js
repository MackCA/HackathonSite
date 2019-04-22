import React, {Component} from 'react';
import SithEmblem from '/./resources/img/Sith Emblem.jpg'
import Team2Emblem from '/./resources/img/download.jpg'
import Team3Emblem from '/./resources/img/EF-EMB-P-00053.jpg'
import Team4Emblem from '/./resources/img/EF-EMB-P-00071.jpg'
import Team5Emblem from '/./resources/img/EF-EMB-P-00074.jpg'
import Team6Emblem from '/./resources/img/batman.jpg'
import Team7Emblem from '/./resources/img/images.png'
import Team8Emblem from '/./resources/img/20653.jpg'


const Team = (props) => {
  return(
      <li>
        <figure className="team-emblem">
          <img src={props.imgSrc} alt={props.imgAlt} rel="emblem"/>
          <figcaption className="captions">Team: {props.teamName}</figcaption>
        </figure>
      </li>
  )
}

class Teams extends Component {
  render() {
    return (
        <section className="section-teams">
          <ul className="teams-showcase">
            <Team
                imgSrc = {SithEmblem}
                imgAlt = {"Team 1 Emblem"}
                teamName = {"The Sith Empire"}
            />
            <Team
                imgSrc={Team2Emblem}
                imgAlt={"Team 2 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team3Emblem}
                imgAlt={"Team 3 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team4Emblem}
                imgAlt={"Team 4 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team5Emblem}
                imgAlt={"Team 5 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team6Emblem}
                imgAlt={"Team 6 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team7Emblem}
                imgAlt={"Team 7 Emblem"}
                teamName={}
            />
            <Team
                imgSrc={Team8Emblem}
                imgAlt={"Team 8 Emblem"}
                teamName={}
            />
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\download.jpg" alt="Team 2 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: Biohazard</figcaption>
              </figure>
            </li>
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\EF-EMB-P-00053.jpg" alt="Team 3 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The Empire</figcaption>
              </figure>
            </li>
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\EF-EMB-P-00071.jpg" alt="Team 4 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The First Order</figcaption>
              </figure>
            </li>
          </ul>
          <ul className="teams-showcase">
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\EF-EMB-P-00074.jpg" alt="Team 5 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The Jedi Order</figcaption>
              </figure>
            </li>
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\batman.jpg" alt="Team 6 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The Batman</figcaption>
              </figure>
            </li>
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\images.png" alt="Team 7 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The Main Event</figcaption>
              </figure>
            </li>
            <li>
              <figure className="team-emblem">
                <img src="\resources\img\20653.jpg" alt="Team 8 Emblem" rel="emblem"/>
                  <figcaption className="captions">Team: The Crazy One</figcaption>
              </figure>
            </li>
          </ul>
        </section>
    );
  }
}

export default Teams