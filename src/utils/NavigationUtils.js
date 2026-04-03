import { getDateFromT, calcTFromDate, isBiennialYear } from "./t.js";
import { isEclipseFromT, isMultiEclipseFromT } from "./EclipseUtils.js";
import * as constants from '../constants.js';

function prevDay(t) {
    return t - 1;
}

function nextDay(t) {
    return t + 1;
}

function prevMonth(t) {
    return t - constants.daysPerMonth;
}

function nextMonth(t) {
    return t + constants.daysPerMonth;
}

function prevYear(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (year > 0) {
        year -= 1;
    } else {
        if (saros == '2') {
            saros = '1';
            year = constants.yearsPerSaros - 1;
        } else { year = 0; }
    }
    return calcTFromDate(year, month, day, saros);
}

function nextYear(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (year < constants.yearsPerSaros - 1 || saros == '2') {
        year += 1;
    } else {
        if (saros == '1') {
            saros = '2';
            year = 0;
        } else { return; }
    }
    return calcTFromDate(year, month, day, saros);
}

function prevEclipse(t) {
    let found = false;
    while (!found && t > constants.saros1start) {
        t--;
        found = isEclipseFromT(t);
    }
    return t;
}

function nextEclipse(t) {
    let found = false;
    while (!found && t < constants.saros2start *2) {
        t++;
        found = isEclipseFromT(t);
    }
    return t;

}

function prev3eclipse(t) {
    let found = false;
    while (!found && t > constants.saros1start) {
        t--;
        found = isMultiEclipseFromT(t);
    }
    return t;
}

function next3eclipse(t) {
    let found = false;
    while (!found && t < constants.saros2start *2) {
        t++;
        found = isMultiEclipseFromT(t);
    }
    return t;
}

export { prevDay, nextDay, prevMonth, nextMonth, prevYear, nextYear, prevEclipse, nextEclipse, prev3eclipse, next3eclipse };