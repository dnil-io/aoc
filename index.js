const parse = require("./parse.js");
const util = require("./util.js");

const start = Date.now();

const sensors = parse();

const filteredSensors = [];

for(let sensorA of sensors) {
    for(let sensorB of sensors) {
        if(util.distanceBetweenSensors(sensorA, sensorB) === 2) {
            filteredSensors.push(sensorA);
            if(filteredSensors.length === 4) break;
        }
    }
}

const lower = util.findLower(filteredSensors);

const bottomLeftSensor = lower[0];
const bottomRightSensor = lower[1];

const point = util.calculateUnreachablePoint(bottomLeftSensor, bottomRightSensor);

console.log(point.x * 4000000 + point.y);

console.log(Date.now() - start);