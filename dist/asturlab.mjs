const kaaba = [39.8262, 21.4225];
function asturlab(position, options = {}) {
    let bearing;
    bearing = options.rhumb ? rhumbBearing(position) : greatCircleBearing(position);
    return bearing;
}
// adapted from turfjs
function rhumbBearing(from) {
    const phi1 = degreesToRadians(from[1]);
    const phi2 = degreesToRadians(kaaba[1]);
    let deltaLambda = degreesToRadians((kaaba[0] - from[0]));
    if (deltaLambda > Math.PI) {
        deltaLambda -= 2 * Math.PI;
    }
    if (deltaLambda < -Math.PI) {
        deltaLambda += 2 * Math.PI;
    }
    const deltaPsi = Math.log(Math.tan(phi2 / 2 + Math.PI / 4) / Math.tan(phi1 / 2 + Math.PI / 4));
    const theta = Math.atan2(deltaLambda, deltaPsi);
    const bear360 = (radiansToDegrees(theta) + 360) % 360;
    const bear180 = (bear360 > 180) ? -(360 - bear360) : bear360;
    return bear180;
}
// adapted from turfjs
function greatCircleBearing(from) {
    const lon1 = degreesToRadians(from[0]);
    const lon2 = degreesToRadians(kaaba[0]);
    const lat1 = degreesToRadians(from[1]);
    const lat2 = degreesToRadians(kaaba[1]);
    const a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const b = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return radiansToDegrees(Math.atan2(a, b));
}
// copied from turfjs
function radiansToDegrees(radians) {
    const degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
// copied from turfjs
function degreesToRadians(degrees) {
    const radians = degrees % 360;
    return radians * Math.PI / 180;
}

export default asturlab;
