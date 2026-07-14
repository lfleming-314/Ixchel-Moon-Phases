import * as constants from "./constants.js";

class moon {
    constructor(name, synodic, color, orbitalTilt) {
        this.name = name;
        this.synodic = synodic; //at the rift, the synodic period changes to match the new day length
        this.color = color;
        this.orbitalTilt = orbitalTilt;
        this.angVel = 360 / this.synodic;
        this.totVelPreRift = this.angVel + constants.degPerDayPreRift;
        this.totVelPostRift = this.angVel + constants.degPerDayPostRift;
        this.riftPos = ((constants.saros2start - 1) * this.totVelPreRift) % 360;
        [this.siderealPreRift, this.siderealPostRift] = calcSiderealMonth(this.synodic);
        [this.draconicPreRift, this.draconicPostRift] = calcDraconicMonth(this.synodic);
    }
}

let oluris = new moon('Oluris', 28, 'BlueViolet', -5);
let syldric = new moon('Syldric', -44, 'LimeGreen', 10);
let caphriel = new moon('Caphriel', -100, 'White', -10);
let lyso = new moon('Lyso', 156, 'Red', 5);

function calcSiderealMonth(synodicMonth) {
    let siderealPreRift = 1 / ((1 / synodicMonth) + (1 / constants.daysPerYearPreRift));
    let siderealPostRift = 1 / ((1 / synodicMonth) + (1 / constants.daysPerYearPostRift));
    return [siderealPreRift, siderealPostRift];
}

function calcDraconicMonth(synodicMonth) {
    let draconicPreRift = 1 / ((1 / synodicMonth) + (1 / constants.nodalPrecessionPeriodPreRift));
    let draconicPostRift = 1 / ((1 / synodicMonth) + (1 / constants.nodalPrecessionPeriodPostRift));
    return [draconicPreRift, draconicPostRift];
}

export {oluris, syldric, caphriel, lyso};