google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['', 'Percentage', { role: 'style' } ],
    ['Coopération', 95, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(24, 106, 130)'],
    ['Concentration', 80, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['Curiosité', 80, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['Autonomie', 90, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['Adaptabilité', 95, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(24, 106, 130)'],
    ['Rigueur', 90, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
]);

var options = { title: "Qualités",
                width:800,
                height:500,
                legend: {position: "none"},
                vAxis: {minValue: 0},
};

var chart = new google.visualization.ColumnChart(document.getElementById('graph-quality'));
chart.draw(data, options);
}
