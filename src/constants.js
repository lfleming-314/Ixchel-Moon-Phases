import months from './months.js';

const saros1start = 300300;
const saros2start = 1201200;
const yearsPerSaros = 2475;
const daysPerMonth = 28;
const monthsPerYear = months.length;
const daysPerYear = daysPerMonth * monthsPerYear;
const daysPerBiennial = daysPerYear * 2 + 1;
const initialT = 1201200;
const initialView = "right";

const degPerYear = 240 / 825;
const degPerDayPreRift = degPerYear / daysPerYear;
const degPerDayPostRift = degPerYear / (daysPerYear + 0.5);

export { saros1start, saros2start, yearsPerSaros, daysPerMonth, monthsPerYear, daysPerYear, daysPerBiennial, initialT, initialView, degPerYear, degPerDayPreRift, degPerDayPostRift };