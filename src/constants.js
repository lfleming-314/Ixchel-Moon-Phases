import months from './months.js';

const saros1start = 300300;
const saros2start = 1201200;
const yearsPerSaros = 2475;
const daysPerMonth = 28;
const monthsPerYear = months.length;
const daysPerYearPreRift = daysPerMonth * monthsPerYear; //sidereal year
const daysPerYearPostRift = daysPerYearPreRift + 0.5; //sidereal year
const daysPerBiennial = daysPerYearPostRift * 2;
const initialT = 1201200;
const initialView = "salix-north";

const degPerYearPreRift = 240 / 825 * 7 * 11 * 5 * 13;
const degPerYearPostRift = degPerYearPreRift * (daysPerYearPostRift / daysPerYearPreRift);
const degPerDay = degPerYearPreRift / daysPerYearPreRift;
const nodalPrecessionPeriod = 360 / degPerDay; //in days
const initialNodePosition = 0; //0 represents minor standstill, 180 represents major standstill

const axialTilt = 30;
const axialProgressionCycle = 720;
const axialProgressionPerYearPreRift = 360 / axialProgressionCycle;
const axialProgressionPerYearPostRift = axialProgressionPerYearPreRift * (daysPerYearPostRift / daysPerYearPreRift);

const tropicalYearPreRift = daysPerYearPreRift - (axialProgressionPerYearPreRift / 360 * daysPerYearPreRift);
const tropicalYearPostRift = daysPerYearPostRift - (axialProgressionPerYearPostRift / 360 * daysPerYearPostRift);

export { 
    saros1start, saros2start, yearsPerSaros, daysPerMonth, monthsPerYear, daysPerYearPreRift, daysPerYearPostRift, daysPerBiennial, 
    initialT, initialView, degPerYearPreRift, degPerYearPostRift, degPerDay, 
    nodalPrecessionPeriod, initialNodePosition,
    axialTilt, axialProgressionCycle, axialProgressionPerYearPreRift, axialProgressionPerYearPostRift,
    tropicalYearPreRift, tropicalYearPostRift
 };