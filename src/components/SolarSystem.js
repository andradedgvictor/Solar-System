import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetsList = Planets.map((planet) => {
      const { name, image } = planet;
      return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planetsList}
      </div>
    );
  }
}

export default SolarSystem;
