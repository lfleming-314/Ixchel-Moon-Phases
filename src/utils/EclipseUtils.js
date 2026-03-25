import getAllPositions from "./PositionUtils.js";

function getEclipses(oPos, sPos, cPos, lPos) {
    let oEclipse = false;
    let sEclipse = false;
    let cEclipse = false;
    let lEclipse = false;

    if (oPos == sPos || oPos == cPos || oPos == lPos) {
        oEclipse = true;
    }
    if (sPos == oPos || sPos == cPos || sPos == lPos) {
        sEclipse = true;
    }
    if (cPos == oPos || cPos == sPos || cPos == lPos) {
        cEclipse = true;
    }
    if (lPos == oPos || lPos == sPos || lPos == cPos) {
        lEclipse = true;
    }

    return {oEclipse, sEclipse, cEclipse, lEclipse};
}

function isEclipse(oPos, sPos, cPos, lPos) {
    let {oEclipse, sEclipse, cEclipse, lEclipse} = getEclipses(oPos, sPos, cPos, lPos);
    return oEclipse || sEclipse || cEclipse || lEclipse;
}

function isEclipseFromT(t) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(t);
    return isEclipse(oPos, sPos, cPos, lPos);
}

function isMultiEclipse(oPos, sPos, cPos, lPos) {
    let {oEclipse, sEclipse, cEclipse, lEclipse} = getEclipses(oPos, sPos, cPos, lPos);
    let count = 0;
    if (oEclipse) { count++; }
    if (sEclipse) { count++; }
    if (cEclipse) { count++; }
    if (lEclipse) { count++; }
    return count > 2;
}

function isMultiEclipseFromT(t) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(t);
    return isMultiEclipse(oPos, sPos, cPos, lPos);
}


export { getEclipses, isEclipse, isEclipseFromT, isMultiEclipseFromT };