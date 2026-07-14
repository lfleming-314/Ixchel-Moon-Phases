import React from 'react';
import MoonPainter from '../utils/MoonPainter';
import { getPhase, getPhaseName } from '../utils/PhaseUtils';
import VisibilityTimes from './VisibilityTimes';
import { getVisibilityTimes, getDeclination } from '../utils/VisibilityUtils';
import views from '../views';

class MoonBox extends React.Component {
    constructor(props) {
        super(props);
        this.moonPainter = null;
    }

    render() {
        return (
            <div id={this.props.moon.name + 'box'} className='moonbox vertical'>
                <h1 style={{ 'color': this.props.moon.color }}>{this.props.moon.name}</h1>
                <canvas id={this.props.moon.name + 'canvas'} width='400' height='400'></canvas>
                <h1 style={{ 'color': this.props.moon.color }}>{getPhaseName(this.props.position, this.props.moon)}</h1>
                <VisibilityTimes moon={this.props.moon} 
                visibilityTimes={getVisibilityTimes(this.props.t, this.props.position, views[this.props.view], this.props.node1Pos, this.props.moon.orbitalTilt)} 
                />
            </div>
        );
    }
    componentDidMount() {
        const canvas = document.getElementById(this.props.moon.name + 'canvas');
        this.moonPainter = new MoonPainter(canvas, this.props.moon.color);
        this.moonPainter.paint(getPhase(this.props.position), this.props.view);
    }
    componentDidUpdate() {
        this.moonPainter.paint(getPhase(this.props.position), this.props.view);
        console.log('MoonBox updated: ' + this.props.moon.name + ' pos=' + this.props.position+ ' view=' + this.props.view);
    }
}

export default MoonBox;