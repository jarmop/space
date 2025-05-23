import { useState } from "react";
import "./App.css";
import { data } from './data.ts';

type Planet = {
  color: string,
  radius: number,
  mass?: number,
  distanceToSun: number,
}

type SystemOption = keyof typeof data
type ViewOption = "RADIUS" | "MASS" | "DISTANCE"

function App() {

  const [system, setSystem] = useState<SystemOption>("sun")
  const [view, setView] = useState<ViewOption>("RADIUS")

  let previousPlanetsDistanceToSun = 0;
  // const systems: Record<SystemOption, Array<Planet>> = {
  //   sun: data.sun,
  //   alphaCentauri: data.alphaCentauriPlanets,
  //   proximaCentauri: data.proximaCentauriPlanets,
  //   SIRIUS: data.siriusPlanets,
  //   KEPLER_90: data.kepler90Planets,
  //   TRAPPIST_1: data.trappist1Planets,
  //   GLIESE_667: data.gliese667Planets,
  //   GLIESE_667C: data.gliese667CPlanets,
  // };

  const planets = data[system].planets;
  const planetsView = planets.map(planet => {
    const distanceToPrevious = planet.distanceToSun - previousPlanetsDistanceToSun;
    previousPlanetsDistanceToSun = planet.distanceToSun;
    return (
      <PlanetView
        key={planet.distanceToSun}
        planet={planet}
        distanceToPrevious={distanceToPrevious}
        showRelativeDiameter={view === "RADIUS"}
        showRelativeMass={view === "MASS"}
        showRelativeDistance={view === "DISTANCE"}
      />
    )
  });

  return (
    <div>
      <select
        defaultValue={system}
        onChange={e => setSystem(e.currentTarget.value as SystemOption)}
      >
        {
          Object.keys(data).map((key) =>
            <option key={key} value={key}>{data[key as SystemOption].name}</option>

          )
        }
      </select>
      <input
        type="radio"
        name="view"
        value="RADIUS"
        defaultChecked={view === "RADIUS"}
        onChange={e => setView(e.currentTarget.value as ViewOption)}
      />
      <label htmlFor="radius">Radius</label>

      <input
        type="radio"
        name="view"
        value="MASS"
        defaultChecked={view === "MASS"}
        onChange={e => setView(e.currentTarget.value as ViewOption)}
      />
      <label htmlFor="mass">Mass</label>
      <input
        type="radio"
        name="view"
        value="DISTANCE"
        defaultChecked={view === "DISTANCE"}
        onChange={e => setView(e.currentTarget.value as ViewOption)}
      />
      <label htmlFor="distance">Distance</label>
      <div className="space">
        {planetsView}
      </div>
    </div>
  );
}

const radiusMultiplier = 1e-3;
const massMultiplier = 1e-28;
const distanceMultiplier = .1;
const defaultDiameter = 1;
const defaultDistance = 30;

interface PlanetViewProps {
  planet: Planet,
  distanceToPrevious: number,
  showRelativeDiameter: boolean,
  showRelativeMass: boolean,
  showRelativeDistance: boolean
}

const PlanetView = ({ planet, distanceToPrevious, showRelativeDiameter, showRelativeMass, showRelativeDistance }: PlanetViewProps) => {
  let diameter = defaultDiameter
  if (showRelativeDiameter) {
    diameter = planet.radius * radiusMultiplier
  } else if (showRelativeMass) {
    diameter = planet.mass ? planet.mass * massMultiplier : 0
  }

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
