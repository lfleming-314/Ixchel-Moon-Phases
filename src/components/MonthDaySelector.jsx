import { isBiennialYear } from '../utils/t.js';
import months from '../months.js';

function MonthDaySelector(props) {
    let monthOptions = [...months];
    let biennialYear = isBiennialYear(props.t);
    return (<div id='monthday'>
        &nbsp;&nbsp;
        <label htmlFor='month'>Month: </label>
        <select id='month' onChange={props.onUpdate} value={props.month}>
            {biennialYear && <option value={0}>Biennial</option>}
            {monthOptions.map((month, index) => (
                <option key={month} value={index + 1}>
                    {month}
                </option>
            ))}
        </select>
        &nbsp;&nbsp;
        <label htmlFor='day'>Day: </label>
        <select id='day' onChange={props.onUpdate} value={props.day}>
            {[...Array(props.month == 0 ? 1 : 28)].map((_, index) => (
                <option key={index+1} value={index+1}>
                    {index + 1}
                </option>
            ))}
        </select>
        &nbsp;&nbsp;
    </div>)
}

export default MonthDaySelector;