function ViewSelector(props) {
    return (<>
        <label htmlFor='view'>View:</label>&nbsp;
        <select id='view' value={props.view} onChange={(e) => props.setView(e.target.value)}>
            <option value='Salix N'>Salix (North)</option>
            <option value='Salix S'>Salix (South)</option>
            <option value='Senna N'>Senna (North)</option>
            <option value='Senna S'>Senna (South)</option>
        </select>
    </>)
}

export default ViewSelector;