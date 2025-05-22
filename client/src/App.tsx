import { useState } from "react";
import "./App.css";
import * as data from './data';

type Planet = {
  color: string,
  radius: number,
  distanceToSun: number,
}

type SystemOption = "SUN" | "KEPLER_90" | "TRAPPIST_1" | "GLIESE_667" | "GLIESE_667C"
type ViewOption = "SIZE" | "DISTANCE"

function App() {

  const [system, setSystem] = useState<SystemOption>("SUN")
  const [view, setView] = useState<ViewOption>("SIZE")

  let previousPlanetsDistanceToSun = 0;
  const systems: Record<SystemOption, Array<Planet>> = {
    SUN: data.sunPlanets,
    KEPLER_90: data.kepler90Planets,
    TRAPPIST_1: data.trappist1Planets,
    GLIESE_667: data.gliese667Planets,
    GLIESE_667C: data.gliese667CPlanets,
  };

  const planets = systems[system];
  const planetsView = planets.map(planet => {
    const distanceToPrevious = planet.distanceToSun - previousPlanetsDistanceToSun;
    previousPlanetsDistanceToSun = planet.distanceToSun;
    return (
      <PlanetView
        key={planet.distanceToSun}
        planet={planet}
        distanceToPrevious={distanceToPrevious}
        showRelativeDiameter={view === "SIZE"}
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
        <option value="SUN">Sun</option>
        <option value="KEPLER_90">Kepler-90</option>
        <option value="TRAPPIST_1">Trappist-1</option>
        <option value="GLIESE_667">Gliese 667</option>
        <option value="GLIESE_667C">Gliese 667 C</option>
      </select>
      <input
        type="radio"
        name="view"
        value="SIZE"
        defaultChecked={view === "SIZE"}
        onChange={e => setView(e.currentTarget.value as ViewOption)}
      />
      <label htmlFor="size">size</label>
      <input
        type="radio"
        name="view"
        value="DISTANCE"
        defaultChecked={view === "DISTANCE"}
        onChange={e => setView(e.currentTarget.value as ViewOption)}
      />
      <label htmlFor="distance">distance</label>
      <div className="space">
        {planetsView}
      </div>
    </div>
  );
}

const radiusMultiplier = .001;
const distanceMultiplier = .1;
const defaultDiameter = 1;
const defaultDistance = 30;

interface PlanetViewProps {
  planet: Planet,
  distanceToPrevious: number,
  showRelativeDiameter: boolean,
  showRelativeDistance: boolean
}

const PlanetView = ({ planet, distanceToPrevious, showRelativeDiameter, showRelativeDistance }: PlanetViewProps) => {
  const diameter = showRelativeDiameter ? planet.radius * radiusMultiplier : defaultDiameter;
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
