const SOLAR_RADIUS = 696342;
const SOLAR_MASS = 1.9885e30;
const EARTH_RADIUS = 6371;
const EARTH_MASS = 5.972e24;
const EARTH_DISTANCE_TO_SUN = 149.6;

// type Star = {
//     name: string, color: string, radius: number, mass: number
// }

const stars = [
    {
        name: 'Sun',
        color: 'yellow',
        radius: 1 * SOLAR_RADIUS,
        mass: 1 * SOLAR_MASS,
    },
    {
        name: 'AlphaCentauri A',
        color: 'yellow',
        radius: 1.2175 * SOLAR_RADIUS,
        mass: 1.0788 * SOLAR_MASS,
        // distanceToSun: 0,
    },
    {
        name: 'AlphaCentauri B',
        color: 'yellow',
        radius: 0.8591 * SOLAR_RADIUS,
        mass: 0.9092 * SOLAR_MASS,
        // 11.2 - 35.6 AU
        // distanceToSun: 23 * EARTH_DISTANCE_TO_SUN,
    },
    {
        name: 'Proxima Centauri',
        color: 'red',
        radius: 0.1542 * SOLAR_RADIUS,
        mass: 0.1221 * SOLAR_MASS,
        // 0.21 light-years
        // distanceToSun: 13000 * EARTH_DISTANCE_TO_SUN,
    },
    {
        name: "Barnard's Star",
        color: 'red',
        radius: 0.187 * SOLAR_RADIUS,
        mass: 0.162 * SOLAR_MASS,
    },
    {
        name: 'Sirius A',
        color: 'lightblue',
        radius: 1.713 * SOLAR_RADIUS,
        mass: 2.063 * SOLAR_MASS,
    },
    {
        name: 'Sirius B',
        color: 'white',
        radius: 0.008098 * SOLAR_RADIUS,
        mass: 1.018 * SOLAR_MASS,
    },
    {
        name: 'Kepler-90',
        color: 'yellow',
        radius: 1.2 * SOLAR_RADIUS,
        mass: 1.2 * SOLAR_MASS,
    },
    {
        name: 'Trappist-1',
        color: 'salmon',
        radius: 0.1192 * SOLAR_RADIUS,
        mass: 0.0898 * SOLAR_MASS,
    },
    {
        name: 'Gliese 667 C',
        color: 'red',
        radius: 0.34 * SOLAR_RADIUS,
        mass: 0.33 * SOLAR_MASS,
    },
    {
        name: 'Lalande 21185',
        color: 'red',
        radius: 0.392 * SOLAR_RADIUS,
        mass: 	0.389 * SOLAR_MASS,
    },
    {
        name: 'Epsilon Eridani',
        color: 'yellow',
        radius: 0.738 * SOLAR_RADIUS,
        mass: 	0.82 * SOLAR_MASS,
    },
    {
        name: 'Lacaille 9352',
        color: 'orange',
        radius: 0.474 * SOLAR_RADIUS,
        mass: 	0.479 * SOLAR_MASS,
    },
] as const

export type Star = typeof stars[number]

type StarByName = Record<Star['name'], Star>

export const starByName = stars.reduce((acc, curr) => {
    acc[curr.name] = curr

    return acc
}, {} as StarByName)



export const starsCloseToSun: { name: Star['name'], distanceToCenter: number }[] = [
    { name: 'Sun', distanceToCenter: 0 },
    { name: 'Proxima Centauri', distanceToCenter: 4.2465 },
    { name: 'AlphaCentauri A', distanceToCenter: 4.3441 },
    { name: 'AlphaCentauri B', distanceToCenter: 4.3441 },
    { name: "Barnard's Star", distanceToCenter: 5.9629 },
    { name: 'Lalande 21185', distanceToCenter: 8.3044 },
    { name: 'Sirius A', distanceToCenter: 8.7094 },
    { name: 'Sirius B', distanceToCenter: 8.7094 },
    { name: 'Epsilon Eridani', distanceToCenter: 10.4749 },
    { name: 'Lacaille 9352', distanceToCenter: 10.7241 },
    { name: 'Gliese 667 C', distanceToCenter: 23 },
    { name: 'Trappist-1', distanceToCenter: 40.66 },
    // { name: 'Kepler-90', distanceToCenter: 2790 },
]

export const starSystems = {
    sun: {
        name: 'Sun',
        planets: [
            {
                color: 'yellow',
                radius: 696342,
                mass: 1 * SOLAR_MASS,
                distanceToSun: 0,
            },
            {
                color: 'lightsalmon',
                radius: 2439.7,
                mass: .0553 * EARTH_MASS,
                distanceToSun: 57.91,
            },
            {
                color: 'orange',
                radius: 6051.8,
                mass: .815 * EARTH_MASS,
                distanceToSun: 108.2,
            },
            {
                color: 'lightblue',
                radius: EARTH_RADIUS,
                mass: 1 * EARTH_MASS,
                distanceToSun: EARTH_DISTANCE_TO_SUN,
            },
            {
                color: 'orangered',
                radius: 3389.5,
                mass: 0.107 * EARTH_MASS,
                distanceToSun: 227.9,
            },
            {
                color: 'gray',
                radius: 469.7,
                mass: 0.00016 * EARTH_MASS,
                distanceToSun: 2.77 * EARTH_DISTANCE_TO_SUN,
            },
            {
                color: 'darkorange',
                radius: 69911,
                mass: 317.8 * EARTH_MASS,
                distanceToSun: 778.5,
            },
            {
                color: 'peru',
                radius: 58232,
                mass: 95 * EARTH_MASS,
                distanceToSun: 1426,
            },
            {
                color: 'lightblue',
                radius: 25362,
                mass: 14.6 * EARTH_MASS,
                distanceToSun: 2871,
            },
            {
                color: 'deepskyblue',
                radius: 24622,
                mass: 17.2 * EARTH_MASS,
                distanceToSun: 4495,
            },
            {
                color: 'lightgray',
                radius: 1188.3,
                mass: .0022 * EARTH_MASS,
                distanceToSun: 7500,
            },
        ]
    },
    alphaCentauri: {
        name: 'Alpha Centauri',
        planets: [
            {
                color: 'yellow',
                radius: 1.2175 * SOLAR_RADIUS,
                mass: 1.0788 * SOLAR_MASS,
                distanceToSun: 0,
            },
            {
                color: 'yellow',
                radius: 0.8591 * SOLAR_RADIUS,
                mass: 0.9092 * SOLAR_MASS,
                // 11.2 - 35.6 AU
                distanceToSun: 23 * EARTH_DISTANCE_TO_SUN,
            },
            {
                color: 'red',
                radius: 0.1542 * SOLAR_RADIUS,
                mass: 0.1221 * SOLAR_MASS,
                // 0.21 light-years
                distanceToSun: 13000 * EARTH_DISTANCE_TO_SUN,
            }
        ]
    },
    proximaCentauri: {
        name: 'Proxima Centauri',
        planets: [
            {
                color: 'red',
                radius: 0.1542 * SOLAR_RADIUS,
                mass: 0.1221 * SOLAR_MASS,
                // 0.21 light-years
                distanceToSun: 0,
            },
            // d
            {
                color: 'yellow',
                radius: 0.81 * EARTH_RADIUS,
                distanceToSun: 0.029 * EARTH_DISTANCE_TO_SUN,
            },
            // b
            {
                color: 'lightblue',
                radius: 1.3 * EARTH_RADIUS,
                distanceToSun: 0.05 * EARTH_DISTANCE_TO_SUN,
            }
        ]
    },
    barnardsStar: {
        name: "Barnard's Star",
        planets: [
            {
                color: 'red',
                radius: 0.187 * SOLAR_RADIUS,
                mass: 0.162 * SOLAR_MASS,
                distanceToSun: 0,
            },
        ]
    },
    sirius: {
        name: 'Sirius',
        planets: [
            {
                color: 'lightblue',
                radius: 1.713 * SOLAR_RADIUS,
                mass: 2.063 * SOLAR_MASS,
                distanceToSun: 0,
            },
            {
                color: 'white',
                radius: 0.008098 * SOLAR_RADIUS,
                mass: 1.018 * SOLAR_MASS,
                distanceToSun: 20 * EARTH_DISTANCE_TO_SUN,
            },
        ]
    },
    kepler90: {
        name: 'Kepler-90',
        planets: [
            {
                color: 'yellow',
                radius: 1.2 * SOLAR_RADIUS,
                mass: 1.2 * SOLAR_MASS,
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
                mass: 15 * EARTH_MASS,
                distanceToSun: 0.71 * EARTH_DISTANCE_TO_SUN,
            },
            {
                color: 'orange',
                radius: 11.32 * EARTH_RADIUS,
                mass: 203 * EARTH_MASS,
                distanceToSun: 1.01 * EARTH_DISTANCE_TO_SUN,
            },
        ]
    },
    trappist1: {
        name: 'Trappist-1',
        planets: [
            {
                color: 'salmon',
                radius: 0.1192 * SOLAR_RADIUS,
                mass: 0.0898 * SOLAR_MASS,
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
        ]
    },
    gliese667: {
        name: 'Gliese 667',
        planets: [{
            color: 'yellow',
            radius: 0.76 * SOLAR_RADIUS,
            mass: 0.73 * SOLAR_MASS,
            distanceToSun: 0,
        },
        {
            color: 'yellow',
            radius: 0.70 * SOLAR_RADIUS,
            mass: 0.69 * SOLAR_MASS,
            distanceToSun: 12.6 * EARTH_DISTANCE_TO_SUN,
        },
        {
            color: 'red',
            radius: 0.34 * SOLAR_RADIUS,
            mass: 0.33 * SOLAR_MASS,
            distanceToSun: 230 * EARTH_DISTANCE_TO_SUN,
        }]
    },
    gliese667c: {
        name: 'Gliese 667 C',
        planets: [{
            color: 'red',
            radius: 0.34 * SOLAR_RADIUS,
            mass: 0.33 * SOLAR_MASS,
            distanceToSun: 0,
        },
        {
            color: 'darkorange',
            radius: 5.6 * EARTH_RADIUS,
            distanceToSun: 0.05 * EARTH_DISTANCE_TO_SUN,
        },
        {
            color: 'peru',
            radius: 3.709 * EARTH_RADIUS,
            distanceToSun: 0.125 * EARTH_DISTANCE_TO_SUN,
        }]
    }
}