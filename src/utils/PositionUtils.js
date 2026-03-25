import { oluris, syldric, caphriel, lyso } from '../moons.js';
import * as constants from '../constants.js';

function getAllPositions(t) {
    let oPos = getPosition(t, oluris);
    let sPos = getPosition(t, syldric);
    let cPos = getPosition(t, caphriel);
    let lPos = getPosition(t, lyso);
    return { oPos, sPos, cPos, lPos };
}

function getPosition(t, moon) {
    let pos = 0;
    if ( t < constants.saros2start ) {
        pos = (t * moon.totVelPreRift) % 360;
    } else {
        pos += (moon.riftPos + ((t - constants.saros2start + 1) * moon.totVelPostRift)) % 360;
    }
    pos = Math.round(pos * 100) / 100;
    if (pos < 0) {
        pos += 360;
    }
    console.log(moon.name + ' position: ' + pos);
    return pos;
}

export default getAllPositions;