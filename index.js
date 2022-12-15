const parse = require("./parse.js");
const util = require("./util.js");

const sensors = parse();

console.log(sensors);

let count = 0; 

for(let i = -50000000; i < 50000000; i++) {
    for(let sensor of sensors) {
        const possibleBeaconPositon = {x: i, y: 2000000};
        if(util.isInReach(sensor, possibleBeaconPositon) && !util.isBeaconPresent(sensors, possibleBeaconPositon)) {
            count++;
            break;
        }
    }
}

console.log(count);