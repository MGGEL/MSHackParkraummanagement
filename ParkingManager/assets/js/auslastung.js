Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Verwendete Parkplätze in Münster'
    },
    xAxis: {
        categories: ['17:50', '18:00', '18:50', '19:00', '19:50', '20:00', '20:50'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Anzahl Verwendeter Parkplätze'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' Parkplätze'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Kostenpflichtige Parkplätze',
        data: [502, 635, 809, 753, 743, 681, 568],
        color: '#A5C614'
    }, {
        name: 'Anwohner Parkplätze',
        data: [406, 407, 411, 433, 421, 467, 466],
        color: '#5E96BB'
    }, {
        name: 'Behindertenparkplätze',
        data: [80, 74, 76, 82, 79, 81, 84],
        color: '#8D48C9'
    }, {
        name: 'E-Ladesäulen',
        data: [18, 31, 54, 56, 39, 48, 44],
        color: '#77C8A4'
    }, {
        name: 'unberechtigtes Parken',
        data: [64, 67, 70, 75, 75, 81, 81],
        color: 'red',
    }]
});


Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Parkplatzauslastung in Münster'
    },
    xAxis: {
        categories: ['Kostenpflichtige Parkplätze', 'Anwohner Parkplätze', 'Behindertenparkplätze', 'E-Ladesäulen'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Verwendete Parkplätze in %'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' %'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Freie Parkplätze',
        data: [40, 47, 41, 43],
        color: '#A5C614'
    },{
        name: 'belegte Parkplätze',
        data: [60, 53, 59, 57],
        color: '#5E96BB'
    } ]
});

