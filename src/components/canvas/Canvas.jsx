import React, {useEffect} from 'react';

const Canvas = ({meme}) => {

	const {url, width, height} = meme;

	useEffect(() => {
		const canvas = document.getElementById("canvas");
		const context = canvas.getContext("2d");
		const img = new Image();
		img.src = url;
		img.onload = () => {
			context.drawImage(img, 0, 0);
		};
	});

	return (
		<canvas id="canvas" width={width} height={height} className="nm-canvas"></canvas>
	)
};

export default Canvas;