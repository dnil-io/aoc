const parse = require("./parse.js");
const util = require("./util.js");

const sensors = parse();

const filteredSensors = [];

for(let sensorA of sensors) {
    for(let sensorB of sensors) {
        if(util.distanceBetweenSensors(sensorA, sensorB) === 2) {
            filteredSensors.push(sensorA);
        }
    }
}

const bottomLeftSensor = util.findLower(filteredSensors)[0];
const bottomRightSensor = util.findLower(filteredSensors)[1];

const point = util.calculateUnreachablePoint(bottomLeftSensor, bottomRightSensor);

console.log(point.x * 4000000 + point.y);