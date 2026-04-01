// MoonPainter code modified from https://codepen.io/anowodzinski/pen/ZWKXPQ
class MoonPainter {
    constructor( canvas, color ) {
        this.canvas = canvas;
        this.color = color;
        this.lineWidth = 10;
        this.radius = canvas.width / 2 - this.lineWidth / 2;
        this.phaseRadius = this.radius - this.lineWidth / 2;
        this.offset = this.lineWidth / 2;
        this.width = canvas.width;
        this.height = canvas.height;

        //final canvas
        this.ctx = canvas.getContext( '2d' );

        //temp canvas for drawing phase
        this.canvas1 = document.createElement( 'canvas' );
        this.canvas1.width = this.width;
        this.canvas1.height = this.height;
        this.canvas1.style.display = 'none';
        this.ctx1 = this.canvas1.getContext( '2d' );

        //temp canvas for drawing disc
        this.canvas2 = document.createElement( 'canvas' );
        this.canvas2.width = this.width;
        this.canvas2.height = this.height;
        this.canvas2.style.display = 'none';
        this.ctx2 = this.canvas2.getContext( '2d' );
    }

    _drawOutline() {
        this.ctx.drawImage( this.canvas2, 0, 0 );
        this.ctx.translate( this.offset, this.offset ) ;
        this.ctx.beginPath();
        this.ctx.arc( this.radius, this.radius, this.radius, 0, 2 * Math.PI, true );
        this.ctx.closePath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
    }

    _drawDisc( phase) {
        this.ctx2.translate( this.offset, this.offset ) ;
        this.ctx2.beginPath();
        this.ctx2.arc( this.radius, this.radius, this.radius, 0, 2 * Math.PI, true );
        this.ctx2.closePath();
        this.ctx2.fillStyle = this.color;
        this.ctx2.lineWidth = this.lineWidth;
        this.ctx2.fill();
        
        if (phase <= 0.5) {
			this.ctx2.globalCompositeOperation = "destination-out";
		} else {
			this.ctx2.globalCompositeOperation = "destination-in";
		}

        this.ctx2.drawImage( this.canvas1, 0, 0 );
    }

    _drawPhase( phase, view ) {

        let paintedPhase = phase;
        if (paintedPhase <= 0.5) {
			paintedPhase = (0.25 - paintedPhase);
		} else {
			paintedPhase = (.75-paintedPhase);
		}

        paintedPhase *= -4;

        let start, end;
		let scaleX, scaleY;
		switch (view) {
			case 'right':
				start = -Math.PI/2;
				end = Math.PI/2;
				scaleX = paintedPhase;
				scaleY = 1;
				break;
			case 'left':
				start = Math.PI/2;
				end = -Math.PI/2;
				scaleX = paintedPhase;
				scaleY = 1;
				break;
			case 'up':
				start = Math.PI;
				end = 2*Math.PI;
				scaleX = 1;
				scaleY = paintedPhase;
				break;
			default:
				start = 2*Math.PI;
				end = Math.PI;
				scaleX = 1;
				scaleY = paintedPhase;
		}

        this.ctx1.beginPath();
		this.ctx1.arc(this.radius, this.radius, this.phaseRadius, start, end, true);
        this.ctx1.fillStyle='white';
		this.ctx1.fill();

        this.ctx1.translate(this.radius, this.radius);
		this.ctx1.scale(scaleX, scaleY);
		this.ctx1.translate(-this.radius, -this.radius);
        this.ctx1.beginPath();
        this.ctx1.arc(this.radius, this.radius, this.phaseRadius, start, end, true);
        if (paintedPhase > 0) {
			this.ctx1.globalCompositeOperation = 'destination-out';
		} else {
            this.ctx1.globalCompositeOperation = 'source-over';
        }
        this.ctx1.closePath();
		this.ctx1.fillStyle = 'white';
		this.ctx1.fill();

        this.ctx1.translate(this.radius, this.radius);
		this.ctx1.scale(2/scaleX, 2/scaleY);
		this.ctx1.translate(-this.radius, -this.radius);
    }
    
    /**
     * @param {Number} The phase expressed as a float in [0,1] range .
     * @param {String} The view, one of 'right', 'left', 'up', 'down'.
     */	
    paint( phase, view ) {
        this.ctx.save();
        this.ctx1.save();
        this.ctx2.save();

        this.ctx.clearRect( 0, 0, this.width, this.height );
        this.ctx1.clearRect( 0, 0, this.width, this.height );
        this.ctx2.clearRect( 0, 0, this.width, this.height );

        this._drawPhase( phase, view );
        this._drawDisc( phase );
        this._drawOutline();

        this.ctx.restore();	
        this.ctx1.restore();
        this.ctx2.restore();
    }
}

export default MoonPainter;