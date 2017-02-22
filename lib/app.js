const $ = require('jquery')
const Chart = require('Chart.js')
const planetCtx = $("#planetChart")

$.getJSON( "/api/planets", function( data ) {
  const planetRadius = data.map((planet) => {
    return parseInt(planet.pl_radj)
  })

  const planetNames = data.map((planet) => {
    return planet.pl_hostname
  })

  const planetData = {
      labels: planetNames,
      datasets: [{
        label: '',
        data: planetRadius,
        backgroundColor: [
            'rgba(5, 194, 209, 0.2)',
        ],
        borderColor: [
            'rgba(5, 194, 209, 1)',
        ],
        borderWidth: 1
    }]
  }

  const planetChart = new Chart(planetCtx,{
      type: 'line',
      data: planetData
  })
})
