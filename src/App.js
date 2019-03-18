import React from 'react';
import './App.css';

const planets = [
  {
    color: 'yellow',
    radius: 696342,
    distanceToSun: 0,
  },
  {
    color: 'lightsalmon',
    radius: 2439.7,
    distanceToSun: 57.91, // million km
  },
  {
    color: 'orange',
    radius: 6051.8,
    distanceToSun: 108.2,
  },
  {
    color: 'lightblue',
    radius: 6371,
    distanceToSun: 149.6,
  },
  {
    color: 'orangered',
    radius: 3389.5,
    distanceToSun: 227.9,
  },
  {
    color: 'darkorange',
    radius: 69911,
    distanceToSun: 778.5,
  },
  {
    color: 'peru',
    radius: 58232,
    distanceToSun: 1426,
  },
  {
    color: 'lightblue',
    radius: 25362,
    distanceToSun: 2871,
  },
  {
    color: 'deepskyblue',
    radius: 24622,
    distanceToSun: 4495,
  },
  {
    color: 'lightgray',
    radius: 1188.3,
    distanceToSun: 7500,
  },
];

const VIEW_OPTION_SIZE = 1;
const VIEW_OPTION_DISTANCE = 2;
// const SPACE_HEIGHT = 400;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewOption: VIEW_OPTION_SIZE,
    };
  }

  setViewOption(viewOption) {
    this.setState({viewOption: viewOption});
  }

  render() {
    console.log('render');
    console.log(this.state.viewOption);
    console.log(VIEW_OPTION_SIZE);
    console.log(VIEW_OPTION_DISTANCE);
    console.log(this.state.viewOption === VIEW_OPTION_SIZE);
    console.log(this.state.viewOption === VIEW_OPTION_DISTANCE);
    let previousPlanetsDistanceToSun = 0;
    let planetsView = planets.map(planet => {
          let distanceToPrevious = planet.distanceToSun - previousPlanetsDistanceToSun;
          previousPlanetsDistanceToSun = planet.distanceToSun;
          return (
              <Planet
                  key={planet.distanceToSun}
                  planet={planet}
                  distanceToPrevious={distanceToPrevious}
                  showRelativeDiameter={this.state.viewOption === VIEW_OPTION_SIZE}
                  showRelativeDistance={this.state.viewOption === VIEW_OPTION_DISTANCE}
              />
          )
        }
    );

    return (
        <div>
          <input
              type="radio"
              name="view"
              value={VIEW_OPTION_SIZE}
              defaultChecked={this.state.viewOption === VIEW_OPTION_SIZE}
              onChange={e => this.setViewOption(parseInt(e.currentTarget.value))}
          />
          <label htmlFor="size">size</label>
          <input
              type="radio"
              name="view"
              value={VIEW_OPTION_DISTANCE}
              defaultChecked={this.state.viewOption === VIEW_OPTION_DISTANCE}
              onChange={e => this.setViewOption(parseInt(e.currentTarget.value))}
          />
          <label htmlFor="distance">distance</label>
          <div className="space">
          {/*<div className="space" style={{height: SPACE_HEIGHT}}>*/}
            {planetsView}
          </div>
        </div>
    );
  }
}

const radiusMultiplier = .0008;
const distanceMultiplier = 0.1;
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
