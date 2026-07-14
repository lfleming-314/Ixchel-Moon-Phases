function roundTo(value, decimals) {
    let factor = Math.pow(10, decimals);
    value = Math.round(value * factor) / factor;
    if (value < 0) {
        value += 360;
    }
    if (value == 360) {
        value = 0;
    }
    return value;
}

export default roundTo;