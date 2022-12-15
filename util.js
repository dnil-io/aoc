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
    const sensorDistance = distance(sensorA, sensorB);
    return sensorDistance - sensorA.reach - sensorB.reach;
}

function findLower(beacons) {
    return beacons.sort((a, b) => b.y - a.y).slice(-2).sort((a, b) => a.x - b.x);
}

function calculateUnreachablePoint(bottomLeft, bottomRight) {
    const l = {x: left.x, y: left.y+left.reach + 1};
    const r = {x: right.x, y: right.y+right.reach + 1};
    const x = ((l.x+l.y)-(r.y-r.x))/2;
    return {
        x: ((l.x+l.y)-(r.y-r.x))/2,
        y: x+(r.y-r.x)
    }
}