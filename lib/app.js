const $ = require('jquery')
const Chart = require('Chart.js')
const planetCtx = $("#planetChart")
const discoveryCtx = $("#discoveryChart")

$.getJSON( "/api/planets", (data) => {
  const planets = data.slice(1,-1)

  const planetNames = planets.map((planet) => {
    return planet.pl_hostname
  })

  const planetDistance = planets.map((planet) => {
    return parseInt(planet.st_dist)
  })

  const planetDensity = planets.map((planet) => {
    return parseInt(planet.pl_dens)
  })

  const planetRadius = planets.map((planet) => {
    return parseInt(planet.pl_radj)
  })

  let discoveryMethod = {}
  const findDiscoveryMethods = planets.map((planet) => {
    if(discoveryMethod[planet.pl_discmethod]) {
      discoveryMethod[planet.pl_discmethod] += 1
    } else {
      discoveryMethod[planet.pl_discmethod] = 1
    }
  })


  const planetData = {
      labels: planetNames,
      datasets: [{
                    label: 'Planet Distance from Earth',
                    data: planetDistance,
                    backgroundColor: [
                        'rgba(5, 194, 209, 0.2)',
                    ],
                    borderColor: [
                        'rgba(5, 194, 209, 1)',
                    ],
                    borderWidth: 1
                },
                {
                  label: 'Planet Density',
                  data: planetDensity,
                  backgroundColor: [
                      'rgba(51, 153, 34, 0.2)',
                  ],
                  borderColor: [
                      'rgba(51, 153, 34, 0.1)',
                  ],
                  borderWidth: 1
              },
              {
                  label: 'Planet Radius',
                  data: planetRadius,
                  backgroundColor: [
                      'rgba(17, 17, 17, 0.2)',
                  ],
                  borderColor: [
                      'rgba(17, 17, 17, 0.1)',
                  ],
                  borderWidth: 1
              }
              ]
  }

  const discoveryData = {
    labels: Object.keys(discoveryMethod),
    datasets: [{
                  label: 'Planet Discovery',
                  data: Object.values(discoveryMethod),
                  backgroundColor: [
                      'rgba(5, 194, 209, 0.2)',
                  ],
                  borderColor: [
                      'rgba(5, 194, 209, 1)',
                  ],
                  borderWidth: 1
              }
            ]
  }


  const planetChart = new Chart(planetCtx,{
      type: 'line',
      data: planetData
  })

  const discoveryChart = new Chart(discoveryCtx, {
    type: 'pie',
    data: discoveryData
  })
})
