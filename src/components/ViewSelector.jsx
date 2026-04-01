function ViewSelector(props) {
    return (<div>
        <label htmlFor='view'>View:</label>&nbsp;
        <select id='view' value={props.view} onChange={(e) => props.setView(e.target.value)}>
            <option value='right'>Salix (North)</option>
            <option value='up'>Salix (Equatorial)</option>
            <option value='left'>Salix (South)</option>
            <option value='right'>Senna (North)</option>
            <option value='down'>Senna (Equatorial)</option>
            <option value='left'>Senna (South)</option>
        </select>
    </div>)
}

export default ViewSelector;