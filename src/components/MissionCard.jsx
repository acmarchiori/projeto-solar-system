import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Missions.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faFlag, faLocationDot } from '@fortawesome/free-solid-svg-icons';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <header>
        <div className="missionCard" data-testid="mission-card">
          <fieldset>
            <p data-testid="mission-name">{ name }</p>
            <p data-testid="mission-year">
              <FontAwesomeIcon icon={ faCalendarDay } />
&nbsp;
              { year }
            </p>
            <p data-testid="mission-country">
              <FontAwesomeIcon icon={ faLocationDot } />
&nbsp;&nbsp;&nbsp;
              { country }
            </p>
            <p data-testid="mission-destination">
              <FontAwesomeIcon icon={ faFlag } />
&nbsp;
              { destination }
            </p>
          </fieldset>
        </div>
      </header>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
