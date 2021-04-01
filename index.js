function distanceFromHqInBlocks(variable) {
    const distance = variable - 42;
    if (variable < 42) {
        return distance * -1;
    }
    return distance;
}
function distanceFromHqInFeet(variable) {
    const distance = distanceFromHqInBlocks(variable) * 264;
    return distance;
}
function distanceTravelledInFeet(var1, var2) {
    const distance = (var2 - var1) * 264;
    if (distance < 0) {
        return distance * -1;
    }
    return distance;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    if (distance > 2000 && distance <= 2500) {
       return 25; 
    }
    if (distance > 2500) {
        return 'cannot travel that far';
    }
}
// Code your solution in this file!
