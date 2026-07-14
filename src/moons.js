import * as constants from "./constants.js";

class moon {
    constructor(name, synodic, color, orbitalTilt) {
        this.name = name;
        this.synodic = synodic; //at the rift, the synodic period changes to match the new day length
        this.color = color;
        this.orbitalTilt = orbitalTilt;
        this.angVel = 360 / this.synodic;
        this.totVel = this.angVel + constants.degPerDay;
        this.sidereal = calcSiderealMonth(this.synodic);
        this.draconic = calcDraconicMonth(this.synodic);
        [this.tropicalPreRift, this.tropicalPostRift] = calcTropicalMonth(this.synodic);
    }
}

let oluris = new moon('Oluris', 28, 'BlueViolet', -5);
let syldric = new moon('Syldric', -44, 'LimeGreen', 10);
let caphriel = new moon('Caphriel', -100, 'White', -10);
let lyso = new moon('Lyso', 156, 'Red', 5);

function calcSiderealMonth(synodicMonth) {
    return 1 / ((1 / synodicMonth) + (1 / constants.daysPerYearPreRift));
}

function calcDraconicMonth(synodicMonth) {
    return 1 / ((1 / synodicMonth) + (1 / constants.nodalPrecessionPeriod));
}

function calcTropicalMonth(synodicMonth) {
    let tropicalPreRift = 1 / ((1/synodicMonth) + (1 / constants.tropicalYearPreRift));
    let tropicalPostRift = 1 / ((1/synodicMonth) + (1 / constants.tropicalYearPostRift));
    return [tropicalPreRift, tropicalPostRift];
}

export {oluris, syldric, caphriel, lyso};