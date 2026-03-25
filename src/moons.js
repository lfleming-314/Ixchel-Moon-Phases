import * as constants from "./constants.js";

class moon {
    constructor(name, orbit, color) {
        this.name = name;
        this.orbit = orbit;
        this.color = color;
        this.angVel = 360 / this.orbit;
        this.totVelPreRift = this.angVel + constants.degPerDayPreRift;
        this.totVelPostRift = this.angVel + constants.degPerDayPostRift;
        this.riftPos = ((constants.saros2start - 1) * this.totVelPreRift) % 360;
    }
}

let oluris = new moon('Oluris', 28, 'BlueViolet');
let syldric = new moon('Syldric', -44, 'Green');
let caphriel = new moon('Caphriel', -100, 'White');
let lyso = new moon('Lyso', 156, 'Red');

export {oluris, syldric, caphriel, lyso};