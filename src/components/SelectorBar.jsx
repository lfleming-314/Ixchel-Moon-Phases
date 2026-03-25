import MonthDaySelector from './MonthDaySelector.jsx';
import ViewSelector from './ViewSelector.jsx';
import YearSelector from './YearSelector.jsx';
import SarosSelector from './SarosSelector.jsx';
import { getDateFromT } from '../utils/t.js';

function SelectorBar(props) {
    let date = getDateFromT(props.t);
    return (
        <div id='selectorbar'>
            <ViewSelector view={props.view} setView={props.setView} />
            <MonthDaySelector onUpdate={props.onUpdate} t={props.t} month={date.month} day={date.day} />
            <YearSelector onUpdate={props.onUpdate} year={date.year} />
            <SarosSelector onUpdate={props.onUpdate} saros={date.saros} />
	    </div>
    );
}

export default SelectorBar;