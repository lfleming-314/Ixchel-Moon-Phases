import months from './months.js';

const saros1start = 300300;
const saros2start = 1201200;
const yearsPerSaros = 2475;
const daysPerMonth = 28;
const monthsPerYear = months.length;
const daysPerYearPreRift = daysPerMonth * monthsPerYear;
const daysPerYearPostRift = daysPerYearPreRift + 0.5;
const daysPerBiennial = daysPerYearPostRift * 2;
const initialT = 1201200;
const initialView = "salix-north";

const degPerYear = 240 / 825; //rotation of nodes is 240 degrees per 825 years, or 0.29090909 degrees per year
const degPerDayPreRift = degPerYear / daysPerYearPreRift;
const degPerDayPostRift = degPerYear / daysPerYearPostRift;
const nodalPrecessionPeriodPreRift = 360 / degPerYear;
const nodalPrecessionPeriodPostRift = nodalPrecessionPeriodPreRift * (daysPerYearPostRift / daysPerYearPreRift);
const initialNodePosition = 0; //0 represents minor standstill, 180 represents major standstill
const riftNodePosition = (initialNodePosition + (yearsPerSaros * degPerYear)) % 360;

const node1RiftPos = ((saros2start - 1) * degPerDayPreRift) % 360;

const axialTilt = 30;
const axialProgressionCycle = 720;
const axialProgressionPerYear = 360 / axialProgressionCycle;

export { 
    saros1start, saros2start, yearsPerSaros, daysPerMonth, monthsPerYear, daysPerYearPreRift, daysPerYearPostRift, daysPerBiennial, 
    initialT, initialView, degPerYear, degPerDayPreRift, degPerDayPostRift, 
    nodalPrecessionPeriodPreRift, nodalPrecessionPeriodPostRift, initialNodePosition, riftNodePosition,
    node1RiftPos, axialTilt, axialProgressionCycle, axialProgressionPerYear
 };