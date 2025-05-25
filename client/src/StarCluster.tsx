import { useState } from "react";
import "./App.css";
import { Star, starByName, starsCloseToSun } from './data.ts';

// type SystemOption = keyof typeof starSystems
type ViewOption = "RADIUS" | "MASS" | "DISTANCE"

function StarCluster() {

  // const [system, setSystem] = useState<SystemOption>("sun")
  const [view, setView] = useState<ViewOption>("RADIUS")

  function SizeView() {
    let previousPlanetsDistanceToSun = 0;
    return starsCloseToSun.map(starCloseToSun => {
      const star = starByName[starCloseToSun.name]
      const distanceToPrevious = starCloseToSun.distanceToCenter - previousPlanetsDistanceToSun;
      previousPlanetsDistanceToSun = starCloseToSun.distanceToCenter;
      return (
        <StarSizeView
          key={star.name}
          star={star}
          distanceToPrevious={distanceToPrevious}
          showRelativeDiameter={view === "RADIUS"}
          showRelativeMass={view === "MASS"}
          showRelativeDistance={view === "DISTANCE"}
        />
      )
    });
  }

  function DistanceView() {
    return starsCloseToSun.map(starCloseToSun => {
      const star = starByName[starCloseToSun.name]
      return (
        <StarDistanceView
          key={star.name}
          star={star}
          distanceToCenter={starCloseToSun.distanceToCenter}
        />
      )
    })

  };

  return (
    <div>
      {/* <select
        defaultValue={system}
        onChange={e => setSystem(e.currentTarget.value as SystemOption)}
      >
        {
          Object.keys(starSystems).map((key) =>
            <option key={key} value={key}>{starSystems[key as SystemOption].name}</option>

          )
        }
      </select> */}
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
        {view === 'DISTANCE' ? <DistanceView /> : <SizeView />}
      </div>
    </div>
  );
}


interface StarDistanceView {
  star: Star,
  distanceToCenter: number
}

const StarDistanceView = ({ star, distanceToCenter, }: StarDistanceView) => {
  const distanceMultiplier = 50;
  const defaultDiameter = 5;

  return (
    <div style={{
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: star.color,
      width: defaultDiameter,
      height: defaultDiameter,
      marginLeft: distanceToCenter * distanceMultiplier
    }}></div>
  )
}

interface StarSizeViewProps {
  star: Star,
  distanceToPrevious: number,
  showRelativeDiameter: boolean,
  showRelativeMass: boolean,
  showRelativeDistance: boolean
}

const StarSizeView = ({ star, showRelativeDiameter, showRelativeMass }: StarSizeViewProps) => {
  const radiusMultiplier = 1e-4;
  const massMultiplier = 4e-29;
  const defaultDistance = 30;

  let diameter = 0
  if (showRelativeDiameter) {
    diameter = star.radius * radiusMultiplier
  } else if (showRelativeMass) {
    diameter = star.mass ? star.mass * massMultiplier : 0
  }

  return (
    <div className="planet" style={{
      backgroundColor: star.color,
      width: diameter,
      height: diameter,
      marginLeft: defaultDistance,
    }}></div>
  );
};

export default StarCluster;
