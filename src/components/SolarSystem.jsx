import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/Title.css';
import '../styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title className="planetas" headline="Planetas" />
        <hr />
        <section className="layout-container">
          {
            planets
              .map((planet, index) => (<PlanetCard
                id={ `planeta_${index}` }
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
