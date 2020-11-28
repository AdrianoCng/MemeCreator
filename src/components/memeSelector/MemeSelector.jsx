import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const MemeSelector = ({setMeme}) => {
	const [memes, setMemes] = useState([]);

	useEffect(() => {
		axios.get("https://api.imgflip.com/get_memes")
		.then(res => { setMemes(res.data.data.memes)})
		.catch(err => alert("Error trying to load memes. Please refresh the page and try again"));
	}, []);

	const handleSelection = ({target}) => {
		setMeme(JSON.parse(target.dataset.meme));
	}

	return (
		<div>
			<span>Pick a meme:</span>
			<hr />
			<div className="container-images mb-5">
				{memes.map((meme, index) => <Button variant="light" key={index} data-meme={JSON.stringify(meme)} onClick={handleSelection}><img className="image-icon" data-meme={JSON.stringify(meme)} src={meme.url} alt={meme.name} onClick={handleSelection} /></Button>)}				
			</div>
		</div>
	)
};

export default MemeSelector;

