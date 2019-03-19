import React from 'react';
import './App.css';
import * as data from './data';

const SYSTEM_OPTION_SUN = 1;
const SYSTEM_OPTION_KEPLER_90 = 2;
const SYSTEM_OPTION_TRAPPIST_1 = 3;

const VIEW_OPTION_SIZE = 1;
const VIEW_OPTION_DISTANCE = 2;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      system: SYSTEM_OPTION_SUN,
      view: VIEW_OPTION_SIZE,
    };
  }

  setView(view) {
    this.setState({view: view});
  }

  setSystem(system) {
    this.setState({system: system});
  }

  render() {
    let previousPlanetsDistanceToSun = 0;
    let systems = {};
    systems[SYSTEM_OPTION_SUN] = data.sunPlanets;
    systems[SYSTEM_OPTION_KEPLER_90] = data.kepler90Planets;
    systems[SYSTEM_OPTION_TRAPPIST_1] = data.trappist1Planets;

    let planets = systems[this.state.system];
    let planetsView = planets.map(planet => {
          let distanceToPrevious = planet.distanceToSun - previousPlanetsDistanceToSun;
          previousPlanetsDistanceToSun = planet.distanceToSun;
          return (
              <Planet
                  key={planet.distanceToSun}
                  planet={planet}
                  distanceToPrevious={distanceToPrevious}
                  showRelativeDiameter={this.state.view === VIEW_OPTION_SIZE}
                  showRelativeDistance={this.state.view === VIEW_OPTION_DISTANCE}
              />
          )
        }
    );

    return (
        <div>
          <select
              defaultValue={this.state.system}
              onChange={e => this.setSystem(parseInt(e.currentTarget.value))}
          >
            <option value={SYSTEM_OPTION_SUN}>Sun</option>
            <option value={SYSTEM_OPTION_KEPLER_90}>Kepler-90</option>
            <option value={SYSTEM_OPTION_TRAPPIST_1}>Trappist-1</option>
          </select>
          <input
              type="radio"
              name="view"
              value={VIEW_OPTION_SIZE}
              defaultChecked={this.state.view === VIEW_OPTION_SIZE}
              onChange={e => this.setView(parseInt(e.currentTarget.value))}
          />
          <label htmlFor="size">size</label>
          <input
              type="radio"
              name="view"
              value={VIEW_OPTION_DISTANCE}
              defaultChecked={this.state.view === VIEW_OPTION_DISTANCE}
              onChange={e => this.setView(parseInt(e.currentTarget.value))}
          />
          <label htmlFor="distance">distance</label>
          <div className="space">
            {planetsView}
          </div>
        </div>
    );
  }
}

const radiusMultiplier = .001;
const distanceMultiplier = 0.5;
const defaultDiameter = 1;
const defaultDistance = 30;

const Planet = ({planet, distanceToPrevious, showRelativeDiameter, showRelativeDistance}) => {
  let diameter = showRelativeDiameter ? planet.radius * radiusMultiplier : defaultDiameter;
  return (
      <div className="planet" style={{
        backgroundColor: planet.color,
        width: diameter,
        height: diameter,
        marginLeft: showRelativeDistance
            ? (distanceToPrevious
              ? distanceToPrevious * distanceMultiplier
              : defaultDistance)
            : defaultDistance,
      }}></div>
  );
};

export default App;
