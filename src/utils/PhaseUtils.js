function getPhase(pos) {
    return pos / 360;
}

function getPhaseName(pos, moon) {
    let phase = pos;
    if (moon.synodic < 0) {
        phase = 360 - pos;
    }
    if (phase > 355 || phase < 5) { return "New Moon"; }
    if (phase < 85) { return "Waxing Crescent"; }
    if (phase < 95) { return "First Quarter"; }
    if (phase < 175) { return "Waxing Gibbous"; }
    if (phase < 185) { return "Full Moon"; }
    if (phase < 265) { return "Waning Gibbous"; }
    if (phase < 275) { return "Last Quarter"; }
    if (phase < 355) { return "Waning Crescent"; }
}

export {getPhase, getPhaseName};