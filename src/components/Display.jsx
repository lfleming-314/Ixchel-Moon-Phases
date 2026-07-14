import Eclipses from './Eclipses';
import MoonBox from './MoonBox';
import getAllPositions from '../utils/PositionUtils';
import {oluris, syldric, caphriel, lyso} from '../moons.js';

function Display(props) {
    let {oPos, sPos, cPos, lPos, node1Pos, node2Pos} = getAllPositions(props.t);
    return (
        <div id='display'>
            <Eclipses oPos={oPos} sPos={sPos} cPos={cPos} lPos={lPos} node1Pos={node1Pos} node2Pos={node2Pos} />
            <div id='moonboxes' className='horizontal small-gap'>
                <MoonBox moon={oluris} position={oPos} view={props.view} t={props.t} node1Pos={node1Pos} />
                <MoonBox moon={syldric} position={sPos} view={props.view} t={props.t} node1Pos={node1Pos} />
                <MoonBox moon={caphriel} position={cPos} view={props.view} t={props.t} node1Pos={node1Pos} />
                <MoonBox moon={lyso} position={lPos} view={props.view} t={props.t} node1Pos={node1Pos} />
            </div>
        </div>
    )
}

export default Display;