function VisibilityTimes(props) {
    return (
        <div id='visibilityTimes' className='vertical' style={{'color': props.moon.color}}>
            <h2 id={"vis1" + props.moon.name} className="small-gap">{props.visibilityTimes[0]}</h2>
            <h2 id={"vis2" + props.moon.name} className="small-gap">{props.visibilityTimes[1]}</h2>
            <h2 id={"vis3" + props.moon.name} className="small-gap">{props.visibilityTimes[2]}</h2>
            <h2 id={'declination' + props.moon.name} className="small-gap">{props.declination}</h2>
        </div>
    );
}

export default VisibilityTimes;