import {getEclipses} from '../utils/EclipseUtils';
import {oluris, syldric, caphriel, lyso} from '../moons.js';

function Eclipses(props)  {
    let {oEclipse, sEclipse, cEclipse, lEclipse, solarEclipse} = getEclipses(props.oPos, props.sPos, props.cPos, props.lPos, props.node1Pos, props.node2Pos);
    return (<h1 id='eclipses' className="small-gap">
        &nbsp;
        {(oEclipse || sEclipse || cEclipse || lEclipse) && <span>Eclipse: &nbsp;</span>}
        {oEclipse && <span style={{'color': oluris.color}}>{oluris.name}</span>}
        {oEclipse && (sEclipse || cEclipse || lEclipse) && <span>-</span>}
        {sEclipse && <span style={{'color': syldric.color}}>{syldric.name}</span>}
        {sEclipse && (cEclipse || lEclipse) && <span>-</span>}
        {cEclipse && <span style={{'color': caphriel.color}}>{caphriel.name}</span>}
        {cEclipse && lEclipse && <span>-</span>}
        {lEclipse && <span style={{'color': lyso.color}}>{lyso.name}</span>}
        {(oEclipse || sEclipse || cEclipse || lEclipse) && solarEclipse && <span>-</span>}
        {solarEclipse && <span style={{'color': 'yellow'}}>Solar</span>}
        &nbsp;

    </h1>)
}

export default Eclipses;