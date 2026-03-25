import { getDateFromT } from '../utils/t.js';

function YearSelector(props) {
    return (<div>
        <label htmlFor='year'>Year: </label>
        <input id='year' type='number' step='1' min ='-2475' onChange={props.onUpdate} value={props.year}></input>
    </div>)
}

export default YearSelector;