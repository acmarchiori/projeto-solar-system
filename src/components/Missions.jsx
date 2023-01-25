import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Title.css';
import '../styles/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <header>
        <div className="smoked">
          <Title className="missoes" headline="Missões" />
          <div className="xexeu">
            <div className="colunas" data-testid="missions">
              {
                missions
                  .map((mission) => (<MissionCard
                    key={ mission.name }
                    name={ mission.name }
                    year={ mission.year }
                    country={ mission.country }
                    destination={ mission.destination }
                  />))
              }
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Missions;
