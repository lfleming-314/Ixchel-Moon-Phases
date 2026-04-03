function rotationFromView(view) {
    let rotation;
    switch (view) {
			case 'salix-north-polar': //right
            case 'senna-north-polar': //right
				rotation = 0;
				break;
			case 'salix-south-polar': //left
            case 'senna-south-polar': //left
				rotation = Math.PI;
				break;
            case 'salix-north':
                rotation = Math.PI / 4;
                break;
            case 'salix-south':
                rotation = 3 * Math.PI / 4;
                break;
            case 'senna-north':
                rotation = 7 * Math.PI / 4;
                break;
            case 'senna-south':
                rotation = 5 * Math.PI / 4;
                break;
			case 'salix-equatorial': //up
                rotation = Math.PI / 2;
				break;
            case 'senna-equatorial': //down
			default: //down
                rotation = 3 * Math.PI / 2;
		}
        return rotation;
}

export {rotationFromView};