import * as constants from "../constants";
import roundTo from "./round";

function getNodePosition(t) {
    let node1Pos = 0;
    let node2Pos = 0;
    if (t < constants.saros2start) {
        node1Pos = (t * constants.degPerDayPreRift) % 360;
        node2Pos = (node1Pos + 180) % 360;
    } else {
        node1Pos = (constants.node1RiftPos + ((t - constants.saros2start + 1) * constants.degPerDayPostRift)) % 360;
        node2Pos = (node1Pos + 180) % 360;
    }
    node1Pos = roundTo(node1Pos, 2);
    node2Pos = roundTo(node2Pos, 2);
    return { node1Pos, node2Pos };
}

export default getNodePosition;