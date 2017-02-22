const $ = require('jquery')
const Chart = require('Chart.js')
const planetCtx = $("#planetChart")

$.getJSON( "/api/planets", function( data ) {
  const planetRadius = data.map((planet) => {
    return parseInt(planet.pl_radj)
  })

  const planetData = {
      labels: ["One Graduate Hired", "Two Graduates Hired", "Three + Graduates Hired"],
      datasets: [{
        label: 'Turing Demographics',
        data: planetRadius,
        backgroundColor: [
            'rgba(5, 194, 209, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 100, 0.2)'
        ],
        borderColor: [
            'rgba(5, 194, 209, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255,99,100,1)'
        ],
        borderWidth: 1
    }]
  }

  const planetChart = new Chart(planetCtx,{
      type: 'pie',
      data: planetData
  })
})
