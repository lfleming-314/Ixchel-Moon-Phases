import * as constants from "../constants";
import roundTo from "./round";

function getNodePosition(t) {
    let node1Pos = (t * constants.degPerDay) % 360;
    let node2Pos = (node1Pos + 180) % 360;
    node1Pos = roundTo(node1Pos, 2);
    node2Pos = roundTo(node2Pos, 2);
    return { node1Pos, node2Pos };
}

export default getNodePosition;