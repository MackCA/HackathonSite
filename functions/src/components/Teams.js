import React, {Component} from 'react';
import SithEmblem from '../resources/img/Sith Emblem.jpg'
import Team2Emblem from '../resources/img/download.jpg'
import Team3Emblem from '../resources/img/EF-EMB-P-00053.jpg'
import Team4Emblem from '../resources/img/EF-EMB-P-00071.jpg'
import Team5Emblem from '../resources/img/EF-EMB-P-00074.jpg'
import Team6Emblem from '../resources/img/batman.jpg'
import Team7Emblem from '../resources/img/images.png'
import Team8Emblem from '../resources/img/20653.jpg'


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
                teamName={"Biohazard"}
            />
            <Team
                imgSrc={Team3Emblem}
                imgAlt={"Team 3 Emblem"}
                teamName={"The Empire"}
            />
            <Team
                imgSrc={Team4Emblem}
                imgAlt={"Team 4 Emblem"}
                teamName={"The First Order"}
            />
            <Team
                imgSrc={Team5Emblem}
                imgAlt={"Team 5 Emblem"}
                teamName={"The Jedi Order"}
            />
            <Team
                imgSrc={Team6Emblem}
                imgAlt={"Team 6 Emblem"}
                teamName={"The Batman"}
            />
            <Team
                imgSrc={Team7Emblem}
                imgAlt={"Team 7 Emblem"}
                teamName={"The Main Event"}
            />
            <Team
                imgSrc={Team8Emblem}
                imgAlt={"Team 8 Emblem"}
                teamName={"The Crazy One"}
            />
          </ul>
        </section>
    );
  }
}

export default Teams