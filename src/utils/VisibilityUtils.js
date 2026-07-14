import * as constants from '../constants.js';

function getVisibilityTimes(t, position, view) {
    let peak = getTimeFromPosition(position);
    let rise = getTimeFromPosition((position - 90 + 360) % 360);
    let set = getTimeFromPosition((position + 90) % 360);
    let timesInOrder = orderTimes([rise, peak, set]);
    let firstTimeLabel = timesInOrder[0] === peak ? "Peak" : (timesInOrder[0] === rise ? "Rise" : "Set");
    let secondTimeLabel = timesInOrder[1] === peak ? "Peak" : (timesInOrder[1] === rise ? "Rise" : "Set");
    let thirdTimeLabel = timesInOrder[2] === peak ? "Peak" : (timesInOrder[2] === rise ? "Rise" : "Set");
    let visibilityTimes = [firstTimeLabel + ": " + timesInOrder[0], secondTimeLabel + ": " + timesInOrder[1], thirdTimeLabel + ": " + timesInOrder[2]];
    return visibilityTimes;
}

function getTimeFromPosition(position) {
    let time = ((position / 360 * 24) + 12) % 24;
    return decimalToHourFormat(time);
}

function decimalToHourFormat(decimalTime) {
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
    console.log('Ordered times: ', timeObjects.map(obj => obj.original));
    return timeObjects.map(obj => obj.original);
}

function getDeclination(t, position, node1Position, orbitalTilt) {
    let declinationRange = getRange(t);
    let decMax = constants.axialTilt + (declinationRange * orbitalTilt);
    let nodeRange = getRangeRelativeToNode(position, node1Position);
    let declination = decMax * nodeRange;
    return declination;
}

function getRange(t) {
    let standstillPosition;
    if (t < constants.saros2start) {
        standstillPosition = constants.nodalPrecessionPeriodPreRift + ((t - constants.saros1start + 1) * constants.degPerDayPreRift) % 360;
    } else {
        standstillPosition = constants.nodalPrecessionPeriodPostRift + ((t - constants.saros2start + 1) * constants.degPerDayPostRift) % 360;
    }
    
    if (standstillPosition > 180) {
        standstillPosition = 360 - standstillPosition;
    }

    return (standstillPosition - 90) / 90; //normalize to -1 to 1 range
}

function getRangeRelativeToNode(position, node1Position) {
    let relPos = (position - node1Position);
    if (relPos < 0) {
        relPos += 360;
    }
    console.log(relPos);
    if (relPos > 180) {
        relPos = 360 - relPos;
    }
    return (relPos - 90) / 90; //normalize to -1 to 1 range
}

export { getVisibilityTimes, getDeclination };