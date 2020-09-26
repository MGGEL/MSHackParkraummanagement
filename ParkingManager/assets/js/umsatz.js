        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Umsatz Falschparker'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Tage'
                }

            },
            yAxis: {
                title: {
                    text: 'EUR'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'EUR',
                data: [[Date.UTC(2020,01,01),1222],
                    [Date.UTC(2020,01,02),1290.3],
                    [Date.UTC(2020,01,03),1250.5],
                    [Date.UTC(2020,01,04),1274],
                    [Date.UTC(2020,01,05),1284.8],
                    [Date.UTC(2020,01,06),1285.1],
                    [Date.UTC(2020,01,07),1292.2],
                    [Date.UTC(2020,01,08),1244.8],
        [Date.UTC(2020,01,09),1228],
        [Date.UTC(2020,01,10),1292.7],
            [Date.UTC(2020,01,11),1223.7],
            [Date.UTC(2020,01,12),1272.4],
            [Date.UTC(2020,01,13),1288.8],
            [Date.UTC(2020,01,14),1256.7],
            [Date.UTC(2020,01,15),1293.4],
            [Date.UTC(2020,01,16),1239.9],
            [Date.UTC(2020,01,17),1289.1],
            [Date.UTC(2020,01,18),1268],
            [Date.UTC(2020,01,19),1258.6],
            [Date.UTC(2020,01,20),1317.3],
            [Date.UTC(2020,01,21),1315.7],
            [Date.UTC(2020,01,22),1252.3],
            [Date.UTC(2020,01,23),1315.9],
            [Date.UTC(2020,01,24),1273.4],
            [Date.UTC(2020,01,25),1241],
            [Date.UTC(2020,01,26),1261],
            [Date.UTC(2020,01,27),1267.8],
            [Date.UTC(2020,01,28),1245.7],
            [Date.UTC(2020,01,29),1242.5],
            [Date.UTC(2020,01,30),1233.7],
            [Date.UTC(2020,01,31),1241.4],
            [Date.UTC(2020,02,01),1246.6],
            [Date.UTC(2020,02,02),1273.5],
            [Date.UTC(2020,02,03),1275.1],
            [Date.UTC(2020,02,04),1280.1],
            [Date.UTC(2020,02,05),1285.2],
            [Date.UTC(2020,02,06),1290.3],
            [Date.UTC(2020,02,07),1233.5],
            [Date.UTC(2020,02,08),1250.3],
        [Date.UTC(2020,02,09),1287.5],
        [Date.UTC(2020,02,10),1222.5],
            [Date.UTC(2020,02,11),1304.1],
            [Date.UTC(2020,02,12),1291],
            [Date.UTC(2020,02,13),1285.6],
            [Date.UTC(2020,02,14),1320.8],
            [Date.UTC(2020,02,15),1230.7],
            [Date.UTC(2020,02,16),1253.4],
            [Date.UTC(2020,02,17),1232.7],
            [Date.UTC(2020,02,18),1308.7],
            [Date.UTC(2020,02,19),1282.8],
            [Date.UTC(2020,02,20),1299],
            [Date.UTC(2020,02,21),1249.4],
            [Date.UTC(2020,02,22),1271.1],
            [Date.UTC(2020,02,23),1238.6],
            [Date.UTC(2020,02,24),1230],
            [Date.UTC(2020,02,25),1292.8],
            [Date.UTC(2020,02,26),1301],
            [Date.UTC(2020,02,27),1265.3],
            [Date.UTC(2020,02,28),1272.2],
            [Date.UTC(2020,02,29),1307.1],
            [Date.UTC(2020,03,01),1233.6],
            [Date.UTC(2020,03,02),1253.9],
            [Date.UTC(2020,03,03),1253.3],
            [Date.UTC(2020,03,04),1231],
            [Date.UTC(2020,03,05),1245.1],
            [Date.UTC(2020,03,06),1275.1],
            [Date.UTC(2020,03,07),1301.8],
            [Date.UTC(2020,03,08),1304],
        [Date.UTC(2020,03,09),1273.8],
        [Date.UTC(2020,03,10),1283.3],
            [Date.UTC(2020,03,11),1290.7],
            [Date.UTC(2020,03,12),1299.1],
            [Date.UTC(2020,03,13),1306.3],
            [Date.UTC(2020,03,14),1313.8],
            [Date.UTC(2020,03,15),1280.9],
            [Date.UTC(2020,03,16),1227],
            [Date.UTC(2020,03,17),1268],
            [Date.UTC(2020,03,18),1256.1],
            [Date.UTC(2020,03,19),1229.5],
            [Date.UTC(2020,03,20),1316.4],
            [Date.UTC(2020,03,21),1242.9],
            [Date.UTC(2020,03,22),1318.5],
            [Date.UTC(2020,03,23),1253.4],
            [Date.UTC(2020,03,24),1230],
            [Date.UTC(2020,03,25),1270.3],
            [Date.UTC(2020,03,26),1237.4],
            [Date.UTC(2020,03,27),1238.8],
            [Date.UTC(2020,03,28),1321.8],
            [Date.UTC(2020,03,29),1238.1],
            [Date.UTC(2020,03,30),1231.5],
            [Date.UTC(2020,03,31),1297.8],
            [Date.UTC(2020,04,01),1268.2],
            [Date.UTC(2020,04,02),1227.9],
            [Date.UTC(2020,04,03),1266.4],
            [Date.UTC(2020,04,04),1296.3],
            [Date.UTC(2020,04,05),1308.6],
            [Date.UTC(2020,04,06),1270.1],
            [Date.UTC(2020,04,07),1233.9],
            [Date.UTC(2020,04,08),1249.7],
        [Date.UTC(2020,04,09),1268.4],
        [Date.UTC(2020,04,10),1277.7],
            [Date.UTC(2020,04,11),1286.9],
            [Date.UTC(2020,04,12),1312.6],
            [Date.UTC(2020,04,13),1272.5],
            [Date.UTC(2020,04,14),1251.7],
            [Date.UTC(2020,04,15),1273.9],
            [Date.UTC(2020,04,16),1321.9],
            [Date.UTC(2020,04,17),1262.5],
            [Date.UTC(2020,04,18),1287.3],
            [Date.UTC(2020,04,19),1265.7],
            [Date.UTC(2020,04,20),1311.8],
            [Date.UTC(2020,04,21),1257],
            [Date.UTC(2020,04,22),1240.2],
            [Date.UTC(2020,04,23),1298.1],
            [Date.UTC(2020,04,24),1231.4],
            [Date.UTC(2020,04,25),1265.8],
            [Date.UTC(2020,04,26),1319.3],
            [Date.UTC(2020,04,27),1240.9],
            [Date.UTC(2020,04,28),1232.3],
            [Date.UTC(2020,04,29),1261.2],
            [Date.UTC(2020,04,30),1316.1],
            [Date.UTC(2020,05,01),1276.7],
            [Date.UTC(2020,05,02),1233.7],
            [Date.UTC(2020,05,03),1315.9],
            [Date.UTC(2020,05,04),1274.4],
            [Date.UTC(2020,05,05),1265.6],
            [Date.UTC(2020,05,06),1240.5],
            [Date.UTC(2020,05,07),1266.2],
            [Date.UTC(2020,05,08),1272.4],
        [Date.UTC(2020,05,09),1286.1],
        [Date.UTC(2020,05,10),1286.9],
            [Date.UTC(2020,05,11),1237.7],
            [Date.UTC(2020,05,12),1236.6],
            [Date.UTC(2020,05,13),1270.5],
            [Date.UTC(2020,05,14),1261.2],
            [Date.UTC(2020,05,15),1237],
            [Date.UTC(2020,05,16),1266.6],
            [Date.UTC(2020,05,17),1232.1],
            [Date.UTC(2020,05,18),1282.4],
            [Date.UTC(2020,05,19),1282.5],
            [Date.UTC(2020,05,20),1303.3],
            [Date.UTC(2020,05,21),1309],
            [Date.UTC(2020,05,22),1244],
            [Date.UTC(2020,05,23),1310.3],
            [Date.UTC(2020,05,24),1262.6],
            [Date.UTC(2020,05,25),1285.6],
            [Date.UTC(2020,05,26),1288.7],
            [Date.UTC(2020,05,27),1233.6],
            [Date.UTC(2020,05,28),1260.9],
            [Date.UTC(2020,05,29),1287.9],
            [Date.UTC(2020,05,30),1288.4],
            [Date.UTC(2020,05,31),1293.7],
            [Date.UTC(2020,06,01),1280.3],
            [Date.UTC(2020,06,02),1255.8],
            [Date.UTC(2020,06,03),1250.9],
            [Date.UTC(2020,06,04),1243.6],
            [Date.UTC(2020,06,05),1251.7],
            [Date.UTC(2020,06,06),1265.4],
            [Date.UTC(2020,06,07),1314.9],
            [Date.UTC(2020,06,08),1272.7],
        [Date.UTC(2020,06,09),1318],
        [Date.UTC(2020,06,10),1304.1],
            [Date.UTC(2020,06,11),1306.7],
            [Date.UTC(2020,06,12),1312.8],
            [Date.UTC(2020,06,13),1286.9],
            [Date.UTC(2020,06,14),1237],
            [Date.UTC(2020,06,15),1232.3],
            [Date.UTC(2020,06,16),1275.3],
            [Date.UTC(2020,06,17),1246.2],
            [Date.UTC(2020,06,18),1293.1],
            [Date.UTC(2020,06,19),1310.5],
            [Date.UTC(2020,06,20),1306.7],
            [Date.UTC(2020,06,21),1286.3],
            [Date.UTC(2020,06,22),1268.3],
            [Date.UTC(2020,06,23),1296.6],
            [Date.UTC(2020,06,24),1267.3],
            [Date.UTC(2020,06,25),1246.3],
            [Date.UTC(2020,06,26),1303.7],
            [Date.UTC(2020,06,27),1274],
            [Date.UTC(2020,06,28),1241],
            [Date.UTC(2020,06,29),1321.2],
            [Date.UTC(2020,06,30),1294],
            [Date.UTC(2020,07,01),1320.9],
            [Date.UTC(2020,07,02),1295.2],
            [Date.UTC(2020,07,03),1270.5],
            [Date.UTC(2020,07,04),1296.7],
            [Date.UTC(2020,07,05),1222.9],
            [Date.UTC(2020,07,06),1242.6],
            [Date.UTC(2020,07,07),1295.5],
            [Date.UTC(2020,07,08),1292],
        [Date.UTC(2020,07,09),1295.6],
        [Date.UTC(2020,07,10),1228.2],
            [Date.UTC(2020,07,11),1250.1],
            [Date.UTC(2020,07,12),1311],
            [Date.UTC(2020,07,13),1310.7],
            [Date.UTC(2020,07,14),1228.4],
            [Date.UTC(2020,07,15),1223.6],
            [Date.UTC(2020,07,16),1320.9],
            [Date.UTC(2020,07,17),1276.4],
            [Date.UTC(2020,07,18),1304.6],
            [Date.UTC(2020,07,19),1290.2],
            [Date.UTC(2020,07,20),1318.2],
            [Date.UTC(2020,07,21),1256.2],
            [Date.UTC(2020,07,22),1314.5],
            [Date.UTC(2020,07,23),1270.5],
            [Date.UTC(2020,07,24),1291],
            [Date.UTC(2020,07,25),1254.9],
            [Date.UTC(2020,07,26),1289],
            [Date.UTC(2020,07,27),1267.2],
            [Date.UTC(2020,07,28),1271.8],
            [Date.UTC(2020,07,29),1297.4],
            [Date.UTC(2020,07,30),1306.9],
            [Date.UTC(2020,07,31),1313.3],
            [Date.UTC(2020,08,01),1273.2],
        [Date.UTC(2020,08,02),1238.3],
        [Date.UTC(2020,08,03),1304.7],
        [Date.UTC(2020,08,04),1225.8],
        [Date.UTC(2020,08,05),1261.4],
        [Date.UTC(2020,08,06),1239.6],
        [Date.UTC(2020,08,07),1269.2],
        [Date.UTC(2020,08,08),1247.9],
        [Date.UTC(2020,08,09),1253.7],
        [Date.UTC(2020,08,10),1271],
        [Date.UTC(2020,08,11),1240.2],
        [Date.UTC(2020,08,12),1229.8],
        [Date.UTC(2020,08,13),1283.4],
        [Date.UTC(2020,08,14),1306.3],
        [Date.UTC(2020,08,15),1272.7],
        [Date.UTC(2020,08,16),1302.9],
        [Date.UTC(2020,08,17),1299],
        [Date.UTC(2020,08,18),1231.5],
        [Date.UTC(2020,08,19),1300.8],
        [Date.UTC(2020,08,20),1287.3],
        [Date.UTC(2020,08,21),1243.5],
        [Date.UTC(2020,08,22),1284.3],
        [Date.UTC(2020,08,23),1245.7],
        [Date.UTC(2020,08,24),1235],
        [Date.UTC(2020,08,25),1227.2],
        [Date.UTC(2020,08,26),1246.2],
        [Date.UTC(2020,08,27),1281],
        [Date.UTC(2020,08,28),1240.8],
        [Date.UTC(2020,08,29),1280.1],
        [Date.UTC(2020,08,30),1268.5],
        [Date.UTC(2020,08,31),1312.9],
        [Date.UTC(2020,09,01),1282.2],
        [Date.UTC(2020,09,02),1236.8],
        [Date.UTC(2020,09,03),1229],
        [Date.UTC(2020,09,04),1242.3],
        [Date.UTC(2020,09,05),1265],
        [Date.UTC(2020,09,06),1271.8],
        [Date.UTC(2020,09,07),1256.7],
        [Date.UTC(2020,09,08),1321.7],
        [Date.UTC(2020,09,09),1273.8],
        [Date.UTC(2020,09,10),1269.5],
        [Date.UTC(2020,09,11),1232.7],
        [Date.UTC(2020,09,12),1236.1],
        [Date.UTC(2020,09,13),1288.7],
        [Date.UTC(2020,09,14),1296],
        [Date.UTC(2020,09,15),1315.2],
        [Date.UTC(2020,09,16),1296.3],
        [Date.UTC(2020,09,17),1224.7],
        [Date.UTC(2020,09,18),1266.9],
        [Date.UTC(2020,09,19),1315.7],
        [Date.UTC(2020,09,20),1236.3],
        [Date.UTC(2020,09,21),1247.9],
        [Date.UTC(2020,09,22),1297.1],
        [Date.UTC(2020,09,23),1232.9],
        [Date.UTC(2020,09,24),1238.2],
        [Date.UTC(2020,09,25),1306.4],
        [Date.UTC(2020,09,26),1304.3],
        [Date.UTC(2020,09,27),1294.9],
        [Date.UTC(2020,09,28),1292.8],
        [Date.UTC(2020,09,29),1283.8],
        [Date.UTC(2020,09,30),1276],
        [Date.UTC(2020,10,01),1267.1],
            [Date.UTC(2020,10,02),1259],
            [Date.UTC(2020,10,03),1255.6],
            [Date.UTC(2020,10,04),1255.4],
            [Date.UTC(2020,10,05),1248.6],
            [Date.UTC(2020,10,06),1240],
            [Date.UTC(2020,10,07),1230.8],
            [Date.UTC(2020,10,08),1221.4],
        [Date.UTC(2020,10,09),1217.4],
        [Date.UTC(2020,10,10),1211.2],
            [Date.UTC(2020,10,11),1207.7],
            [Date.UTC(2020,10,12),1207.5],
            [Date.UTC(2020,10,13),1203.9],
            [Date.UTC(2020,10,14),1194.3],
            [Date.UTC(2020,10,15),1193.3],
            [Date.UTC(2020,10,16),1188.7],
            [Date.UTC(2020,10,17),1188.3],
            [Date.UTC(2020,10,18),1188.2],
            [Date.UTC(2020,10,19),1186.4],
            [Date.UTC(2020,10,20),1184.9],
            [Date.UTC(2020,10,21),1177.9],
            [Date.UTC(2020,10,22),1171],
            [Date.UTC(2020,10,23),1162.4],
            [Date.UTC(2020,10,24),1155.2],
            [Date.UTC(2020,10,25),1152.5],
            [Date.UTC(2020,10,26),1146.5],
            [Date.UTC(2020,10,27),1138],
            [Date.UTC(2020,10,28),1131.8],
            [Date.UTC(2020,10,29),1131.5],
            [Date.UTC(2020,10,30),1127.5],
            [Date.UTC(2020,10,31),1118.7],
            [Date.UTC(2020,11,01),1117.8],
            [Date.UTC(2020,11,02),1111],
            [Date.UTC(2020,11,03),1104],
            [Date.UTC(2020,11,04),1097.9],
            [Date.UTC(2020,11,05),1097],
            [Date.UTC(2020,11,06),1093.7],
            [Date.UTC(2020,11,07),1088.7],
            [Date.UTC(2020,11,08),1085.5],
        [Date.UTC(2020,11,09),1078.8],
        [Date.UTC(2020,11,10),1073.7],
            [Date.UTC(2020,11,11),1069.9],
            [Date.UTC(2020,11,12),1068.9],
            [Date.UTC(2020,11,13),1059.3],
            [Date.UTC(2020,11,14),1050.7],
            [Date.UTC(2020,11,15),1050.7],
            [Date.UTC(2020,11,16),1043.9],
            [Date.UTC(2020,11,17),1035.1],
            [Date.UTC(2020,11,18),1034.7],
            [Date.UTC(2020,11,19),1032.7],
            [Date.UTC(2020,11,20),1030.3],
            [Date.UTC(2020,11,21),1023.9],
            [Date.UTC(2020,11,22),1021.3],
            [Date.UTC(2020,11,23),1017.6],
            [Date.UTC(2020,11,24),1013.1],
            [Date.UTC(2020,11,25),1010.3],
            [Date.UTC(2020,11,26),1007.7],
            [Date.UTC(2020,11,27),999.2],
            [Date.UTC(2020,11,28),992.5],
            [Date.UTC(2020,11,29),986.1],
            [Date.UTC(2020,11,30),979.6],
            [Date.UTC(2020,12,01),977],
            [Date.UTC(2020,12,02),969.9],
            [Date.UTC(2020,12,03),968.8],
            [Date.UTC(2020,12,04),964.2],
            [Date.UTC(2020,12,05),963.7],
            [Date.UTC(2020,12,06),960.7],
            [Date.UTC(2020,12,07),954.5],
            [Date.UTC(2020,12,08),947.7],
        [Date.UTC(2020,12,09),947.5],
        [Date.UTC(2020,12,10),940.4],
            [Date.UTC(2020,12,11),936.5],
            [Date.UTC(2020,12,12),927.9],
            [Date.UTC(2020,12,13),922.4],
            [Date.UTC(2020,12,14),919.9],
            [Date.UTC(2020,12,15),915.1],
            [Date.UTC(2020,12,16),906.4],
            [Date.UTC(2020,12,17),901.9],
            [Date.UTC(2020,12,18),894.1],
            [Date.UTC(2020,12,19),886.3],
            [Date.UTC(2020,12,20),876.7],
            [Date.UTC(2020,12,21),872.1],
            [Date.UTC(2020,12,22),867],
            [Date.UTC(2020,12,23),866.8],
            [Date.UTC(2020,12,24),863.9],
            [Date.UTC(2020,12,25),859.3],
            [Date.UTC(2020,12,26),857.3],
            [Date.UTC(2020,12,27),849.1],
            [Date.UTC(2020,12,28),848.7],
            [Date.UTC(2020,12,29),844.9],
            [Date.UTC(2020,12,30),840.4],
            [Date.UTC(2020,12,31),839.7],

        ]
            }]
        });
