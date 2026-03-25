import {getEclipses} from '../utils/EclipseUtils';
import {oluris, syldric, caphriel, lyso} from '../moons.js';

function Eclipses(props)  {
    let {oEclipse, sEclipse, cEclipse, lEclipse} = getEclipses(props.oPos, props.sPos, props.cPos, props.lPos);
    return (<h1 id='eclipses'>
        {(oEclipse || sEclipse || cEclipse || lEclipse) && <span>Eclipses:</span>}
        {oEclipse && <span style={{'color': oluris.color}}>{oluris.name}</span>}
        {oEclipse && (sEclipse || cEclipse || lEclipse) && <span>-</span>}
        {sEclipse && <span style={{'color': syldric.color}}>{syldric.name}</span>}
        {sEclipse && (cEclipse || lEclipse) && <span>-</span>}
        {cEclipse && <span style={{'color': caphriel.color}}>{caphriel.name}</span>}
        {cEclipse && lEclipse && <span>-</span>}
        {lEclipse && <span style={{'color': lyso.color}}>{lyso.name}</span>}
    </h1>)
}

export default Eclipses;