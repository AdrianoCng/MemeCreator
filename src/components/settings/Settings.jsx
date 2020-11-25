import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Settings = ({meme, setResponse, setShowModal}) => {
	const [params, setParams] = useState(null);

	const {box_count, id} = meme;

	const username = process.env.REACT_APP_USERNAME;
	const password = process.env.REACT_APP_PASSWORD;

	let URL = `https://api.imgflip.com/caption_image?template_id=${id}&username=${username}&password=${password}`;	

	const handleSubmit = event => {
		event.preventDefault();

		for (const param in params) {
			URL += `&${param}=${params[param]}`;
		};

		axios.post(URL)
		.then(res => {
			setResponse(res);
			setShowModal(true);
		})
		.catch(err => console.log(err));

		document.getElementById("form").reset();
		setParams(null);
	};

	const handleOnChange = ({target: {name, value}}) => {
		setParams(prev => ({
			...prev,
			[name]: value
		}));
	}

	const formControls = [];
	for(let i = 1; i <= box_count; i++) {
		formControls.push(
			<Form.Group key={i}>
				<Form.Label htmlFor={`form-input#${i}`}>Text box #{i}:</Form.Label>
				<Form.Control id={`form-input#${i}`} name={`boxes[${i}][text]`} type="text" onChange={handleOnChange}/>
			</Form.Group>
		);
	};

	return (
		<Form className="mb-4" onSubmit={handleSubmit} id="form">
			{formControls}
			{box_count && <Button type="submit">Generate</Button>}
		</Form>
	)
};

export default Settings;