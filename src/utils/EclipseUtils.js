import getAllPositions from "./PositionUtils.js";
import getNodePositions from "./NodeUtils.js";

function getEclipses(oPos, sPos, cPos, lPos, node1Pos, node2Pos) {
    let oEclipse = false;
    let sEclipse = false;
    let cEclipse = false;
    let lEclipse = false;
    let solarEclipse = false;

    if (isSolarEclipse(oPos, sPos, cPos, lPos, node1Pos, node2Pos)) {
        solarEclipse = true;
    }

    if (oPos == sPos || oPos == cPos || oPos == lPos || (oPos == 0 && solarEclipse)) {
        oEclipse = oPos == node1Pos || oPos == node2Pos || (oPos == 0 && solarEclipse);
    }
    if (sPos == oPos || sPos == cPos || sPos == lPos || (sPos == 0 && solarEclipse)) {
        sEclipse = sPos == node1Pos || sPos == node2Pos || (sPos == 0 && solarEclipse);
    }
    if (cPos == oPos || cPos == sPos || cPos == lPos || (cPos == 0 && solarEclipse)) {
        cEclipse = cPos == node1Pos || cPos == node2Pos || (cPos == 0 && solarEclipse);
    }
    if (lPos == oPos || lPos == sPos || lPos == cPos || (lPos == 0 && solarEclipse)) {
        lEclipse = lPos == node1Pos || lPos == node2Pos || (lPos == 0 && solarEclipse);
    }
    

    return {oEclipse, sEclipse, cEclipse, lEclipse, solarEclipse};
}

function isEclipse(oPos, sPos, cPos, lPos, node1Pos, node2Pos) {
    let {oEclipse, sEclipse, cEclipse, lEclipse, solarEclipse} = getEclipses(oPos, sPos, cPos, lPos, node1Pos, node2Pos);
    return oEclipse || sEclipse || cEclipse || lEclipse || solarEclipse;
}

function isEclipseFromT(t) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(t);
    let {node1Pos, node2Pos} = getNodePositions(t);
    return isEclipse(oPos, sPos, cPos, lPos, node1Pos, node2Pos);
}

function isMultiEclipse(numOccs, oPos, sPos, cPos, lPos, node1Pos, node2Pos) {
    let {oEclipse, sEclipse, cEclipse, lEclipse, solarEclipse} = getEclipses(oPos, sPos, cPos, lPos, node1Pos, node2Pos);
    let count = 0;
    if (oEclipse) { count++; }
    if (sEclipse) { count++; }
    if (cEclipse) { count++; }
    if (lEclipse) { count++; }
    if (solarEclipse) { count++; }
    return count >= numOccs;
}

function isMultiEclipseFromT(numOccs, t) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(t);
    let {node1Pos, node2Pos} = getNodePositions(t);
    return isMultiEclipse(numOccs, oPos, sPos, cPos, lPos, node1Pos, node2Pos);
}

function isSolarEclipse(oPos, sPos, cPos, lPos, node1Pos, node2Pos) {
    return (oPos == 0 || sPos == 0 || cPos == 0 || lPos == 0);
}

function isSolarEclipseFromT(t) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(t);
    let {node1Pos, node2Pos} = getNodePositions(t);
    return isSolarEclipse(oPos, sPos, cPos, lPos, node1Pos, node2Pos);
}

export { getEclipses, isEclipse, isEclipseFromT, isMultiEclipseFromT, isSolarEclipseFromT };