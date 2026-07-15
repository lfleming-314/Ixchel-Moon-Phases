import * as constants from "./constants.js";

class moon {
    constructor(name, synodic, color, orbitalTilt) {
        this.name = name;
        this.synodic = synodic;
        this.color = color;
        this.orbitalTilt = orbitalTilt;
        this.angVel = 360 / this.synodic;
        this.totVel = this.angVel + constants.degPerDay;
        [this.siderealPreRift, this.siderealPostRift] = calcSiderealMonth(this.synodic);
        [this.draconicPreRift, this.draconicPostRift] = calcDraconicMonth(this.synodic);
        [this.tropicalPreRift, this.tropicalPostRift] = calcTropicalMonth(this.synodic);
    }
}

let oluris = new moon('Oluris', 28, 'BlueViolet', -5);
let syldric = new moon('Syldric', -44, 'LimeGreen', 10);
let caphriel = new moon('Caphriel', -100, 'White', -10);
let lyso = new moon('Lyso', 156, 'Red', 5);

function calcSiderealMonth(synodicMonth) {
    let preRift =  1 / ((1 / synodicMonth) + (1 / constants.daysPerYearPreRift));
    let postRift =  1 / ((1 / synodicMonth) + (1 / constants.daysPerYearPostRift));
    return [preRift, postRift];
}

function calcDraconicMonth(synodicMonth) {
    let preRift = 1 / ((1 / synodicMonth) + (1 / constants.nodalPrecessionPeriodPreRift));
    let postRift = 1 / ((1/synodicMonth) + (1 / constants.nodalPrecessionPeriodPostRift));
    return [preRift, postRift];
}

function calcTropicalMonth(synodicMonth) {
    let tropicalPreRift = 1 / ((1/synodicMonth) + (1 / constants.tropicalYearPreRift));
    let tropicalPostRift = 1 / ((1/synodicMonth) + (1 / constants.tropicalYearPostRift));
    return [tropicalPreRift, tropicalPostRift];
}

export {oluris, syldric, caphriel, lyso};