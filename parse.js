const fs = require('fs');
const util = require('./util.js');

module.exports = function readInput() {
    const allFileContents = fs.readFileSync('input', 'utf-8');
    
    const result = [];

    allFileContents.split(/\r?\n/).forEach(line =>  {
        //0          |1      |2 |3      |4                      |5      |6 |7
        //Sensor at x=3729579, y=1453415: closest beacon is at x=4078883, y=2522671
        const split = line.split(/\=|\,|\:/);
        const sensor = {
            x: Number.parseInt(split[1]),
            y: Number.parseInt(split[3]),
            beacon: {
                x: Number.parseInt(split[5]),
                y: Number.parseInt(split[7])
            }
        };
        sensor.reach = util.distance(sensor, sensor.beacon);
        result.push(sensor);
    });

    return result;
}

