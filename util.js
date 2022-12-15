module.exports= {
    distance,
    isInReach,
    isBeaconPresent
}

function distance(sensor, beacon) {
    const distanceX = Math.abs(sensor.x - beacon.x);
    const distanceY = Math.abs(sensor.y - beacon.y);
    return distanceX + distanceY;
}

function isInReach(sensor, beacon) {
    return distance(sensor, beacon) <= sensor.reach;
}

function isBeaconPresent(sensors, beaconToSearch) {
    for(let sensor of sensors) {
        if(sensor.beacon.x === beaconToSearch.x && sensor.beacon.y === beaconToSearch.y) return true;
    }
}