import { oluris, syldric, caphriel, lyso } from '../moons.js';
import * as constants from '../constants.js';
import getNodePosition from './NodeUtils.js';
import roundTo from './round.js';

function getAllPositions(t) {
    let oPos = getPosition(t, oluris);
    let sPos = getPosition(t, syldric);
    let cPos = getPosition(t, caphriel);
    let lPos = getPosition(t, lyso);
    let { node1Pos, node2Pos } = getNodePosition(t);
    return { oPos, sPos, cPos, lPos, node1Pos, node2Pos };
}

function getPosition(t, moon) {
    let pos = 0;
    pos = (t * moon.totVel) % 360;
    pos = roundTo(pos, 2);
    return pos;
}

export default getAllPositions;