import * as constants from '../constants.js';
import roundTo from './round.js';

function getVisibilityTimes(t, position, view, node1Position, orbitalTilt) {
    let latitude = view.latitude;
    let hemisphere = latitude >= 0 ? 1 : -1;
    let declination = getDeclination(t, position, node1Position, orbitalTilt);
    let maxAltitude = 90 - latitude + (hemisphere * declination);
    if (maxAltitude > 90) {
        maxAltitude -= 180;
    }

    if (latitude + Math.abs(declination) < 90) {
        console.log("latitude:", latitude, "declination", declination);
        // Clamp the acos argument to [-1, 1] to prevent NaN when tangent products exceed bounds
        let acosArg = -Math.tan(Math.abs(latitude) * Math.PI / 180) * Math.tan(Math.abs(declination) * Math.PI / 180);
        acosArg = Math.max(-1, Math.min(1, acosArg));
        let hourAngle = Math.acos(acosArg) * 180 / Math.PI;
        console.log("hourangle", hourAngle);
        let peak = getTimeFromPosition(position * view.rotation);
        let rise = getTimeFromPosition((position * view.rotation - hourAngle) % 360);
        let set = getTimeFromPosition((position * view.rotation + hourAngle) % 360);
        let timesInOrder = orderTimes([rise, peak, set]);
        let firstTimeLabel = timesInOrder[0] === peak ? "Peak" : (timesInOrder[0] === rise ? "Rise" : "Set");
        let secondTimeLabel = timesInOrder[1] === peak ? "Peak" : (timesInOrder[1] === rise ? "Rise" : "Set");
        let thirdTimeLabel = timesInOrder[2] === peak ? "Peak" : (timesInOrder[2] === rise ? "Rise" : "Set");
        let visibilityTimes = [firstTimeLabel + ": " + timesInOrder[0], secondTimeLabel + ": " + timesInOrder[1], thirdTimeLabel + ": " + timesInOrder[2]];
        visibilityTimes.push("Max Altitude: " + Math.round(maxAltitude * 100) / 100 + "°");
        return visibilityTimes;
    } else {
        if (latitude * declination > 0) {
            return ["Peak: " + getTimeFromPosition(position), "Always Visible", "Max Altitude: " + roundTo(maxAltitude, 2) + "°"];
        } else {
            return ["Not Visible"];
        }
    }    
}

function getTimeFromPosition(position) {
    let time = ((position / 360 * 24) + 12) % 24;
    if (time < 0) {
        time += 24;
    }
    return decimalToHourFormat(time);
}

function decimalToHourFormat(decimalTime) {
    console.log(decimalTime);
    let hours = Math.floor(decimalTime);
    let minutes = Math.floor((decimalTime - hours) * 60);
    let seconds = Math.floor(((decimalTime - hours) * 60 - minutes) * 60);
    if (seconds >= 30) {
        minutes++;
    }
    return padZero(hours) + ":" + padZero(minutes);
}

function padZero(num) {
    let str = num.toString();
    if (str.length < 2) {
        str = '0' + str;
    }
    return str;
}

function orderTimes(listOfTimes) {
    let orderedTimes = [];
    let timeObjects = listOfTimes.map(timeString => {
        let [hours, minutes] = timeString.split(':').map(Number);
        return { hours, minutes, original: timeString };
    });
    timeObjects.sort((a, b) => {
        if (a.hours !== b.hours) {
            return a.hours - b.hours;
        }
        return a.minutes - b.minutes;
    });
    return timeObjects.map(obj => obj.original);
}

function getDeclination(t, position, node1Position, orbitalTilt) {
    let declinationRange = getRange(t);
    let decMax = constants.axialTilt + (declinationRange * orbitalTilt);
    let nodeRange = getRangeRelativeToNode(position, node1Position);
    let declination = decMax * nodeRange;
    return declination;
}

function getRange(t) { //where we are in the standstill cycle, normalized to -1 to 1 range
    let standstillPosition = (t % constants.nodalPrecessionPeriod) / constants.nodalPrecessionPeriod * 360;
    
    if (standstillPosition > 180) {
        standstillPosition = 360 - standstillPosition;
    }

    return (standstillPosition - 90) / 90; //normalize to -1 to 1 range
}

function getRangeRelativeToNode(position, node1Position) {
    let relPos = (position - node1Position); //range of -360 to 360
    return Math.sin(relPos * Math.PI / 180); //normalize to -1 to 1 range
}

export { getVisibilityTimes, getDeclination };