google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['', 'Percentage', { role: 'style' } ],
    ['C', 90, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(24, 106, 130)'],
    ['SHELL', 70, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['WORDPRESS', 70, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['GIT', 60, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['VISUAL STUDIO', 70, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)'],
    ['HTML / CSS', 30, 'stroke-color: #703593; stroke-width: 2; fill-color: rgb(81, 159, 182)']
]);

var options = { title: "Compétences",
                width:800,
                height:500,
                legend: {position: "none"},
};

var chart = new google.visualization.BarChart(document.getElementById('graph-comp'));
chart.draw(data, options);
}
