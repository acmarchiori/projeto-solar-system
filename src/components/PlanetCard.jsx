import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SolarSystem.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, id } = this.props;
    return (
      <div data-testid="planet-card">
        <section className="block">
          <img className={ id } src={ planetImage } alt={ `Planeta ${planetName}` } />
        </section>
        <section className="paragrafo">
          <p data-testid="planet-name">{planetName}</p>
        </section>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default PlanetCard;
