import * as constants from '../constants.js';

function calculateT() {
    let month = Number(document.getElementById('month').value);
    let day = Number(document.getElementById('day').value);
    let year = Number(document.getElementById('year').value);
    let saros = document.getElementById('saros').value;

    if (isNaN(year)) {
        year = 0;
    }
    if (month == 0 && !isBiennialYearFromDate(year, saros)) {
        month = 1;
        document.getElementById('month').value = 1;
    }
    if (year < 0) {
        if (saros == '2') {
            saros = '1';
            year = constants.yearsPerSaros + year;
            document.getElementById('year').value = year;
        } else {
            year = 0;
            document.getElementById('year').value = 0;
        }
    }
    
    return calcTFromDate(year, month, day, saros);
}

function calcTFromDate(year, month, day, saros) {
    let newT = 0;
    newT += year * constants.daysPerMonth * constants.monthsPerYear;
    if (saros == '2') {
        newT += constants.saros2start;
        let num_biennials = (year - (year % 2)) / 2;
        newT += num_biennials;
        if (year % 2 == 1 || month > 0) {
            newT += (month-1) * constants.daysPerMonth;
            newT += day;
        }
    }
    if (saros == '1') {
        newT += constants.saros1start;
        newT += (month-1) * constants.daysPerMonth;
        newT += day - 1;
    }
    console.log("t:", newT);
    return newT;
}

function isBiennial(t) {
    if (t < constants.saros2start) {return false;}
    return (t - constants.saros2start) % constants.daysPerBiennial === 0 ? true : false;
}

function isBiennialYear(t) {
    if (t < constants.saros2start) {return false;}
    return ((t - constants.saros2start) % constants.daysPerBiennial) <= constants.daysPerYearPostRift ? true : false;
}

function isBiennialYearFromDate(year, saros) {
    if (saros == '1') {return false;}
    return year % 2 === 0 ? true : false;
}

function getDateFromT(t) {
    let day, month, year, saros;
    saros = t >= constants.saros2start ? '2' : '1';
    if (t < constants.saros2start) {
        let tempT = t - constants.saros1start;
        let tRem = tempT % constants.daysPerYearPreRift;
        year = (tempT - tRem) / constants.daysPerYearPreRift;
        day = (tRem % constants.daysPerMonth) + 1;
        month = (tRem - (tRem % constants.daysPerMonth)) / constants.daysPerMonth + 1;
    } else {
        let tempT = t - constants.saros2start;
        let t2rem = tempT % constants.daysPerBiennial;
        year = (tempT - t2rem) / constants.daysPerBiennial * 2;
        if (t2rem > constants.daysPerYearPostRift) {
            t2rem -= (constants.daysPerYearPostRift - .5);
            year += 1;
        }
        t2rem -= 1;
        if (isBiennial(t))  {
            day = 1;
            month = 0;
        } else {
            day = (t2rem % constants.daysPerMonth) + 1;
            month = (t2rem - (t2rem % constants.daysPerMonth)) / constants.daysPerMonth + 1;
        }
    }
    
    return {year, month, day, saros};
}

export { calculateT, calcTFromDate, isBiennial, isBiennialYear, getDateFromT };