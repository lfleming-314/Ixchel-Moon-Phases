import Eclipses from './Eclipses';
import MoonBox from './MoonBox';
import getAllPositions from '../utils/PositionUtils';
import {oluris, syldric, caphriel, lyso} from '../moons.js';

function Display(props) {
    let {oPos, sPos, cPos, lPos} = getAllPositions(props.t);
    return (
        <div id='display'>
            <div id='moonboxes' className='horizontal'>
                <MoonBox moon={oluris} position={oPos} view={props.view} />
                <MoonBox moon={syldric} position={sPos} view={props.view} />
                <MoonBox moon={caphriel} position={cPos} view={props.view} />
                <MoonBox moon={lyso} position={lPos} view={props.view} />
            </div>
            <Eclipses oPos={oPos} sPos={sPos} cPos={cPos} lPos={lPos} />
        </div>
    )
}

export default Display;