const SUN_RADIUS = 696342;
const EARTH_RADIUS = 6371;
const EARTH_DISTANCE_TO_SUN = 149.6;

export const sunPlanets = [
  {
    color: 'yellow',
    radius: 696342,
    distanceToSun: 0,
  },
  {
    color: 'lightsalmon',
    radius: 2439.7,
    distanceToSun: 57.91,
  },
  {
    color: 'orange',
    radius: 6051.8,
    distanceToSun: 108.2,
  },
  {
    color: 'lightblue',
    radius: EARTH_RADIUS,
    distanceToSun: EARTH_DISTANCE_TO_SUN,
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

export const kepler90Planets = [
  {
    color: 'yellow',
    radius: 834840,
    distanceToSun: 0,
  },
  {
    color: 'lightsalmon',
    radius: 8346,
    distanceToSun: 11.07,
  },
  {
    color: 'brown',
    radius: 1.18 * EARTH_RADIUS,
    distanceToSun: 0.089 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'goldenrod',
    radius: 1.32 * EARTH_RADIUS,
    distanceToSun: 0.107 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'lightgray',
    radius: 2.88 * EARTH_RADIUS,
    distanceToSun: 0.32 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'deepskyblue',
    radius: 2.67 * EARTH_RADIUS,
    distanceToSun: 0.42 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'peru',
    radius: 2.89 * EARTH_RADIUS,
    distanceToSun: 0.48 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'darkorange',
    radius: 8.13 * EARTH_RADIUS,
    distanceToSun: 0.71 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'orange',
    radius: 11.32 * EARTH_RADIUS,
    distanceToSun: 1.01 * EARTH_DISTANCE_TO_SUN,
  },
];

export const trappist1Planets = [
  {
    color: 'salmon',
    radius: 0.121 * SUN_RADIUS,
    distanceToSun: 0,
  },
  {
    color: 'darkolivegreen',
    radius: 1.121 * EARTH_RADIUS,
    distanceToSun: 0.01154775 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'bisque',
    radius: 1.095 * EARTH_RADIUS,
    distanceToSun: 0.01581512 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'darkgray',
    radius: 0.784 * EARTH_RADIUS,
    distanceToSun: 0.02228038 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'bisque',
    radius: 0.910 * EARTH_RADIUS,
    distanceToSun: 0.02928285 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'bisque',
    radius: 1.046 * EARTH_RADIUS,
    distanceToSun: 0.03853361 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'bisque',
    radius: 1.148 * EARTH_RADIUS,
    distanceToSun: 0.04687692 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'sandybrown',
    radius: 0.773 * EARTH_RADIUS,
    distanceToSun: 0.06193488 * EARTH_DISTANCE_TO_SUN,
  },
];

export const gliese667Planets = [
  {
    color: 'yellow',
    radius: 0.76 * SUN_RADIUS,
    distanceToSun: 0,
  },
  {
    color: 'yellow',
    radius: 0.70 * SUN_RADIUS,
    distanceToSun: 12.6 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'red',
    radius: 0.42 * SUN_RADIUS,
    distanceToSun: 230 * EARTH_DISTANCE_TO_SUN,
  }
];

export const gliese667CPlanets = [
  {
    color: 'red',
    radius: 0.42 * SUN_RADIUS,
    distanceToSun: 0,
  },
  {
    color: 'yellow',
    radius: 5.6 * EARTH_RADIUS,
    distanceToSun: 0.05 * EARTH_DISTANCE_TO_SUN,
  },
  {
    color: 'yellow',
    radius: 3.709 * EARTH_RADIUS,
    distanceToSun: 0.125 * EARTH_DISTANCE_TO_SUN,
  }
];