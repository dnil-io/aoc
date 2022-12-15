module.exports= {
    distance,
    distanceBetweenSensors,
    findLower,
    calculateUnreachablePoint
}

function distance(sensor, beacon) {
    const distanceX = Math.abs(sensor.x - beacon.x);
    const distanceY = Math.abs(sensor.y - beacon.y);
    return distanceX + distanceY;
}

function distanceBetweenSensors(sensorA, sensorB) {
    return distance(sensorA, sensorB) - sensorA.reach - sensorB.reach;
}

function findLower(beacons) {
    return beacons.sort((a, b) => b.y - a.y).slice(-2).sort((a, b) => a.x - b.x);
}

function calculateUnreachablePoint(bottomLeft, bottomRight) {
    const l = {x: bottomLeft.x, y: bottomLeft.y+bottomLeft.reach + 1};
    const r = {x: bottomRight.x, y: bottomRight.y+bottomRight.reach + 1};
    const x = ((l.x+l.y)-(r.y-r.x))/2;
    return {
        x: x,
        y: x+(r.y-r.x)
    }
}