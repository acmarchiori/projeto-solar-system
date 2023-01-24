import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <header>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
      </header>
    );
  }
}

export default Missions;
