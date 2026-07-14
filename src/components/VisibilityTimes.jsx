function VisibilityTimes(props) {
    return (
        <div id='visibilityTimes' className='vertical' style={{'color': props.moon.color}}>
            {props.visibilityTimes.map((item, index) => (
                <h2 key={index} className="small-gap">{item}</h2>
            ))}
        </div>
    );
}

export default VisibilityTimes;