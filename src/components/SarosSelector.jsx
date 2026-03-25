import { getDateFromT } from "../utils/t";

function SarosSelector(props) {
    return (<>
        <label htmlFor='saros'>Saros: </label>
        <select id='saros' onChange={props.onUpdate} value={props.saros}>
            <option value='1'>1</option>
            <option value='2'>2</option>
        </select>
    </>)
}

export default SarosSelector;