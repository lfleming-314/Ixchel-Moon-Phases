function ViewSelector(props) {
    return (<div>
        <label htmlFor='view'>View:</label>&nbsp;
        <select id='view' value={props.view} onChange={(e) => props.setView(e.target.value)}>
            <option value='salix-north-polar'>Salix (N Polar)</option>
            <option value='salix-north'>Salix (North)</option>
            <option value='salix-equatorial'>Salix (Equatorial)</option>
            <option value='salix-south'>Salix (South)</option>
            <option value='salix-south-polar'>Salix (S Polar)</option>
            <option value='senna-north-polar'>Senna (N Polar)</option>
            <option value='senna-north'>Senna (North)</option>
            <option value='senna-equatorial'>Senna (Equatorial)</option>
            <option value='senna-south'>Senna (South)</option>
            <option value='senna-south-polar'>Senna (S Polar)</option>
        </select>
    </div>)
}

export default ViewSelector;