import { getDateFromT, calcTFromDate, isBiennialYear } from "./t.js";
import { isEclipseFromT, isMultiEclipseFromT } from "./EclipseUtils.js";
import * as constants from '../constants.js';

function prevDay(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (day > 1) {
        day -= 1;
    } else if (month > 1) {
        month -= 1;
        day = constants.daysPerMonth;
    } else if (month == 1 && saros == '2' && isBiennialYear(t)) {
        month -= 1;
        day = 1;
    } else if (year > 0) {
        year -= 1;
        month = constants.monthsPerYear;
        day = constants.daysPerMonth;
    } else {
        if (saros == '2') {
            saros = '1';
            year = constants.yearsPerSaros - 1;
            month = constants.monthsPerYear;
            day = constants.daysPerMonth;
        }
    }
    return calcTFromDate(year, month, day, saros);
}

function nextDay(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (day < constants.daysPerMonth && month != 0){
        day += 1;
    } else if (month < constants.monthsPerYear) {
        month += 1;
        day = 1;
    } else if (month == constants.monthsPerYear) {
        if (year == constants.yearsPerSaros - 1) {
            console.log('saros change');
            if (saros == '1') {
                console.log('saros change 2');
                saros = '2';
                year = 0;
                month = 0;
                day = 1;
            } else {
                if (saros == '2' && !isBiennialYear(t)) {
                    month = 0;
                } else {
                month = 1;
                }
                day = 1
                year += 1;
            } 
        }
    } else {
        year += 1;
        month = 1;
        day = 1;
    }
    return calcTFromDate(year, month, day, saros);
}

function prevMonth(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (month > 1) {
        month -= 1;
    } else if (year > 0) {
        year -= 1;
        month = constants.monthsPerYear;
    } else {
        if (saros == '2') {
            saros = '1';
            year = constants.yearsPerSaros - 1;
            month = constants.monthsPerYear;
        }
    }
    return calcTFromDate(year, month, day, saros);
}

function nextMonth(t) {
    let {day, month, year, saros} = getDateFromT(t);
    if (month < constants.monthsPerYear) {
        month += 1;
    } else if (month == constants.monthsPerYear) {
        if (year == constants.yearsPerSaros - 1) {
            if (saros == '1') {
                saros = '2';
                year = 0;
                month = 1;
            } else { return; }
        } else if (saros == '2' && !isBiennialYear(t)) {
            month = 0;
        }   else {month = 1;
        }        year += 1;
    } else {
        year += 1;
        month = 1;
    }
    return calcTFromDate(year, month, day, saros);
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